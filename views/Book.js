import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import mapstyle from '../style';
import Feather from 'react-native-vector-icons/Feather';
import data from '../data';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/selection.json';
import MapViewDirections from 'react-native-maps-directions';
import API_KEY from '../API_KEY';
import Svg, {Polygon} from 'react-native-svg';

const Car = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

function Book({navigation}) {
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: -6.328487,
          longitude: 107.296592,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01 * ASPECT_RATIO,
        }}
        customMapStyle={mapstyle}>
        <Marker
          tracksViewChanges={false}
          coordinate={{
            latitude: -6.324693,
            longitude: 107.297301,
          }}>
          <>
            <View>
              <View
                style={{
                  width: 220,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowRadius: 4,
                  shadowOpacity: 0.05,
                  borderRadius: 5,
                  padding: 10,
                  borderLeftColor: '#0fdca3',
                  borderLeftWidth: 6,
                  position: 'relative',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: 10}} />
                  <Text style={{color: '#a1a2a9', fontWeight: 'bold'}}>
                    R.A De Mel Mawatha
                  </Text>
                  <Feather
                    name="chevron-right"
                    size={20}
                    style={{color: '#a1a2a9'}}
                  />
                </View>
                <Svg
                  viewBox="0 0 29 14"
                  style={{position: 'absolute', bottom: -10, zIndex: 2}}>
                  <Polygon fill="#fff" points="0.15,0 14.5,14.35 28.85,0 " />
                </Svg>
              </View>
            </View>
            <View
              style={[
                styles.dotWrapper,
                {
                  backgroundColor: 'rgba(5,209,154,.20)',
                },
              ]}>
              <View style={[styles.dot, {backgroundColor: '#05d19a'}]} />
            </View>
          </>
        </Marker>
        <Marker
          tracksViewChanges={false}
          coordinate={{
            latitude: -6.329493,
            longitude: 107.296243,
          }}>
          <>
            <View>
              <View
                style={{
                  width: 220,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowRadius: 4,
                  shadowOpacity: 0.05,
                  borderRadius: 5,
                  padding: 10,
                  borderLeftColor: '#f74556',
                  borderLeftWidth: 6,
                  position: 'relative',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: 10}} />
                  <Text style={{color: '#a1a2a9', fontWeight: 'bold'}}>
                    Maharagama, Sri Lanka
                  </Text>
                  <Feather
                    name="chevron-right"
                    size={20}
                    style={{color: '#a1a2a9'}}
                  />
                </View>
                <Svg
                  viewBox="0 0 29 14"
                  style={{position: 'absolute', bottom: -10, zIndex: 1}}>
                  <Polygon fill="#fff" points="0.15,0 14.5,14.35 28.85,0 " />
                </Svg>
              </View>
            </View>
            <View
              style={[
                styles.dotWrapper,
                {
                  backgroundColor: 'rgba(247,69,86,.20)',
                },
              ]}>
              <View style={[styles.dot, {backgroundColor: '#f74556'}]} />
            </View>
          </>
        </Marker>
        <MapViewDirections
          origin={{
            latitude: -6.324693,
            longitude: 107.297301,
          }}
          destination={{
            latitude: -6.329493,
            longitude: 107.296243,
          }}
          apikey={API_KEY}
          mode="WALKING"
          strokeColor="#646571"
          strokeWidth={4}
          lineDashPattern={[6, 6]}
        />
      </MapView>
      <View
        style={{
          position: 'absolute',
          flex: 1,
        }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Feather name="menu" size={24} style={styles.iconBlack} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Feather name="x" size={24} style={styles.iconBlack} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
      <View
        style={{
          position: 'absolute',
          width,
          bottom: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#fff',
            borderTopRightRadius: 25,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -4,
            },
            shadowRadius: 5,
            shadowOpacity: 0.05,
          }}>
          {data.map((data) => {
            return (
              <View key={data.id}>
                <Text style={{color: data.id === '1' ? '#454754' : '#c3c3c7'}}>
                  {data.name}
                </Text>
                <Car
                  style={{color: data.id === '1' ? '#454754' : '#c3c3c7'}}
                  name={data.icon}
                  size={40}
                />
              </View>
            );
          })}
        </View>

        <View
          style={{
            backgroundColor: '#f4f4f5',
            alignItems: 'center',
            paddingHorizontal: 40,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              color: '#8a8c95',
              fontSize: 20,
              fontWeight: '500',
              marginBottom: 10,
            }}>
            LKR 550-600
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: 'bold', color: '#8a8c95'}}>Note: </Text>
            <Text style={{color: '#8a8c95'}}>
              This is an approximate asetimate, Actual cost may be different due
              to traffic and waiting time
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#e9e9eb',
              paddingHorizontal: 20,
              paddingVertical: 20,
              width: width / 2,
              alignItems: 'center',
              borderRightColor: '#f5f5f6',
              borderRightWidth: 2,
            }}>
            <Text style={{color: '#adaeb4', fontSize: 16, fontWeight: '500'}}>
              Cash
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#e9e9eb',
              paddingHorizontal: 20,
              paddingVertical: 20,
              width: width / 2,
              alignItems: 'center',
              borderLeftColor: '#f5f5f6',
              borderLeftWidth: 2,
            }}>
            <Text style={{color: '#555664', fontSize: 16, fontWeight: '500'}}>
              ABC123
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#000',
            paddingTop: 20,
            paddingBottom: 40,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 16,
            }}>
            Book Now
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    width: width - 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBlack: {
    color: '#525361',
  },
  dotWrapper: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
});

export default Book;
