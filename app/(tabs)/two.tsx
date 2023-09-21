import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Text, View } from '../../components/Themed';
import { StyleSheet } from 'react-native';
import MapView, { Circle, Marker, Polygon } from 'react-native-maps';

export default function TabTwoScreen() {
  const [location, setLocation] = useState(null);
  const POINTS = [
    {
      "longitude": -36.8925869,
      "latitude": -60.31533,
      "id": "1234567890",
    },
    {
      "longitude": -36.8925869,
      "latitude": -60.31533,
      "id": "9876543210",
    },
    {
      "longitude": -36.8925869,
      "latitude": -60.31533,
      "id": "1234567891",
    },
    {
      "longitude": -36.8925869,
      "latitude": -60.31533,
      "id": "9876543211",
    },
    {
      "longitude": -36.8925869,
      "latitude": -60.31533,
      "id": "1234567892",
    },
  ];
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      setLocation(calculateRegion(location.coords));
    })();
  }, []);

  // error access location 
  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    )
  }

  // loading location
  if (!location) return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        initialRegion={calculateRegion(location)}
        userInterfaceStyle={"dark"}
      >
        {POINTS.map(p => (
          <Polygon
            // @ts-expect-error
            key={p.id}
            coordinates={createCircleCoordinates({
              latitude: p.latitude,
              longitude: p.longitude
            }, .001)}
            strokeColor={"#ff00ff"}
            fillColor={"#ff00ff"}
          />
        ))}
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude
          }}
          title="Googleplex"
          description="Google's headquarters"
        />
      </MapView>
    </View>
  );
}

function calculateRegion(location) {
  const latitudeDelta = 0.09;
  const longitudeDelta = 0.01;

  return {
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta,
    longitudeDelta
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

function createCircleCoordinates(center, radius) {
  const coordinates = [];
  for (let i = 0; i < 360; i++) {
    const angle = i * (Math.PI / 180);
    const latitude = center.latitude + radius * Math.cos(angle);
    const longitude = center.longitude + radius * Math.sin(angle);
    coordinates.push({ latitude, longitude });
  }
  return coordinates;
}