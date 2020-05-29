/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MapView from 'react-native-maps';

import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MapView
          style={{width: '100%', height: '100%'}}
          region={{
            latitude: 4.6997102,
            longitude: -74.091749,
            latitudeDelta: 0.2,
            longitudeDelta: 0.3,
          }}
          showsTraffic={true}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
