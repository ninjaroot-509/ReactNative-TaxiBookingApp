import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SharedElement} from 'react-navigation-shared-element';
import data2 from '../data2';
import data3 from '../data3';

export default function Book({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.card}>
          <View style={styles.drop}>
            <Text style={styles.dropText}>Drop Location</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Feather name="x" size={24} style={{color: '#8c8d95'}} />
            </TouchableOpacity>
          </View>

          <View style={styles.search}>
            <View style={styles.inputWrapper}>
              <View style={styles.dot} />
              <TextInput
                style={styles.inputText}
                placeholder="Your pickup location?"
                placeholderTextColor="#9fa1a7"
                autoFocus
              />
            </View>
            <View>
              <Feather name="heart" size={20} style={{color: '#8c8d95'}} />
            </View>
          </View>

          <View style={styles.bottomCard}>
            <View style={styles.bottomCardPin}>
              <Fontisto
                name="map-marker-alt"
                size={20}
                style={{color: '#ff4858', marginRight: 20}}
              />
              <Text style={{color: '#9fa1a7', fontSize: 16}}>
                Tap to select from the map
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.buttonCircle}>
              <Feather name="arrow-right" size={20} style={{color: '#fff'}} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.contentWrapper}>
        <Text style={styles.bigTitle}>Favorite places</Text>
        <View style={{marginBottom: 20}}>
          {data2.map((data) => {
            return (
              <View key={data.id} style={styles.favoriteWrapper}>
                <View style={styles.favoriteWrapper2}>
                  <Fontisto
                    name="heart"
                    size={18}
                    style={{color: '#02dc9f', marginRight: 10}}
                  />
                  <View>
                    <Text style={styles.favoriteTitle}>{data.title}</Text>
                    <Text style={styles.favoriteSubtitle}>{data.subtitle}</Text>
                  </View>
                </View>
                <View>
                  <Feather
                    name="minus-circle"
                    size={24}
                    style={{color: '#ff909a'}}
                  />
                </View>
              </View>
            );
          })}
        </View>
        <Text style={styles.bigTitle}>Recently visited places</Text>
        <View>
          {data3.map((data) => {
            return (
              <View key={data.id} style={styles.recentWrapper}>
                <MaterialCommunityIcons
                  name="clock-time-five"
                  size={24}
                  style={{color: '#80828b', marginRight: 10}}
                />
                <Text
                  style={{color: '#80828b', fontSize: 14, fontWeight: '600'}}>
                  {data.title}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    padding: 20,
    marginHorizontal: 10,
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
  },
  drop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropText: {
    fontWeight: 'bold',
    color: '#ff4858',
  },
  search: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#efefef',
    borderWidth: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#ff4858',
    marginRight: 15,
  },
  inputText: {
    fontWeight: '600',
  },
  bottomCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomCardPin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  bigTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3a3b4b',
    marginBottom: 20,
  },
  favoriteWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  favoriteWrapper2: {
    flexDirection: 'row',
  },
  favoriteTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3a3b4b',
    marginBottom: 5,
  },
  favoriteSubtitle: {
    color: '#aaabb1',
  },
  recentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
