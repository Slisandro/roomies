import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Text, View } from '../../components/Themed';
import SearchBarMapComponent from '../../components/search-bar-map-component';
import useLocation from '../../hooks/location/use-location-hooks';
import useGetRooms from '../../hooks/rooms/use-get-rooms-hooks';
import { calculateRegion } from '../../utils/calculate-region';
import MarkerRoomsComponent from '../../components/marker-rooms-component';

export default function TabTwoScreen() {
  const { errorMsg, location } = useLocation();
  const { rooms } = useGetRooms();

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
      <SearchBarMapComponent />
      <MapView
        style={styles.map}
        loadingEnabled={true}
        initialRegion={calculateRegion(location)}
        userInterfaceStyle={"dark"}
      >
        {rooms.map((p, i) => <MarkerRoomsComponent room={p} key={p.id} />)}
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          image={{
            uri: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-50.png",
          }}
        />
      </MapView>
    </SafeAreaView>
  );
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