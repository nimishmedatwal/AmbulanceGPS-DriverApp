import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";

const App = () => {

  const [mapLoc, setMapLoc] = useState({latitude: 0, longitude: 0, coordinates: []});

  const getLocation = ()=>{ 
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}

        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    height: "60%",
    width: "100%",
  },
  map: {
    flex: 1
  }
});