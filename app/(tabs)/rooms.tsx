import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Text, View } from '../../components/Themed';
import { Button, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Circle, Marker, Callout } from 'react-native-maps';
import Icon from '../../components/Icon';

export default function TabTwoScreen() {
  const [location, setLocation] = useState(null);
  const POINTS = [
    {
      "longitude": -60.32974737646605,
      "latitude": -36.91621360789941,
      "id": "9876543211",
      "title": "Room 1",
      "description": "Big room with all accommodations"
    },
    {
      "longitude": -60.28974737646605,
      "latitude": -36.91621364780041,
      "id": "1234567892",
      "title": "Room 2",
      "description": "Big room with all accommodations"
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
      // console.log(calculateRegion(location.coords))
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
    <SafeAreaView style={styles.container}>
      <View style={{ position: "absolute", top: 45, width: "100%", zIndex: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 25, backgroundColor: "transparent" }}>
        <View style={{ display: "flex", backgroundColor: "transparent", width: "75%", height: "100%" }}>
          <TextInput style={{ width: "100%", color: "#ffffff75", backgroundColor: "#00000050", padding: 15, paddingLeft: 20, borderRadius: 10, height: "100%", fontSize: 20 }} placeholder='Buscar ciudad'>
          </TextInput>
          {/* <TouchableOpacity>
            <Text style={{ borderBottomWidth: 1, borderBottomColor: "#fff" }}>Filtros</Text>
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity style={{ backgroundColor: "#00000050", padding: 15, borderRadius: 10 }}>
          <Icon
            family='Ionicons'
            color='#fff'
            name='add'
            key={"icon_add"}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        initialRegion={calculateRegion(location)}
        userInterfaceStyle={"dark"}
      >
        {POINTS.map((p, i) => (
          <Marker
            key={p.id}
            coordinate={{
              latitude: p.latitude,
              longitude: p.longitude
            }}
            title={p.title}
            description={p.description}
          />
        ))}
        {/* <Circle
          center={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          radius={250}
          strokeColor='#00000035'
          fillColor='#00000030'
          strokeWidth={1}
        /> */}
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          image={{
            uri: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-50.png",
          }}
          title="You here"
        // description="Location"
        />
      </MapView>
    </SafeAreaView>
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