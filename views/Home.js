import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import mapStyle from '../style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import data from '../data';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import iconMoonConfig from '../assets/selection.json';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Car = createIconSetFromIcoMoon(iconMoonConfig, 'icomoon', 'icomoon.ttf');

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        provider="google"
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 51.49884356111293,
          longitude: -0.23511911999011847,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05 * ASPECT_RATIO,
        }}
        customMapStyle={mapStyle}>
        <Marker
          coordinate={{
            latitude: 51.49814463042944,
            longitude: -0.23468817823447652,
          }}>
          <View style={styles.pin}>
            <Fontisto
              name="map-marker-alt"
              size={30}
              style={{color: '#0ddda2'}}
            />
          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: 51.48904042580765,
            longitude: -0.2288186121646296,
          }}>
          <View style={styles.currentLocation}>
            <Ionicons name="navigate" size={30} style={{color: '#fff'}} />
          </View>
        </Marker>
      </MapView>
      <View>
        <SafeAreaView style={styles.container}>
          <View>
            <Feather name="menu" size={24} />
          </View>
          <TouchableOpacity style={styles.search}>
            <View style={styles.inputWrapper}>
              <View style={styles.greenDot} />
              <View>
                <Text style={styles.inputText}>Your Pickup location</Text>
              </View>
            </View>
            <View style={styles.heart}>
              <Feather name="heart" size={20} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.catagoryWrapper}>
          {data.map((data) => {
            return (
              <View key={data.id} style={styles.catagory}>
                <Text style={{color: data.id === '1' ? '#5d5e6b' : '#c1c2c7'}}>
                  {data.name}
                </Text>
                <Car
                  style={{color: data.id === '1' ? '#5d5e6b' : '#c1c2c7'}}
                  name={data.icon}
                  size={45}
                />
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pick Me Here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  search: {
    marginHorizontal: 10,
    marginTop: 10,
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 6,
    shadowOpacity: 0.05,
  },

  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#0ddda2',
    marginRight: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontWeight: '600',
    color: '#97989f',
  },
  catagoryWrapper: {
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    right: 0,
    top: height / 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 20,
    shadowOpacity: 0.1,
  },
  catagory: {
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  pin: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: 'rgba(2,220,159,.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  currentLocation: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
