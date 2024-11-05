import React from 'react';
import { StyleSheet } from 'react-native';
import FlatListDashboardComponent from '../../components/flat-list-dashboard-component';
import { Text, View } from '../../components/Themed';
import auth from '../../firebase/auth';
import useLocation from '../../hooks/location/use-location-hooks';
import useGetPopularRooms from '../../hooks/rooms/use-get-popular-rooms-hooks';

export default function TabOneScreen() {
  const { currentUser } = auth;
  const { errorMsg, location } = useLocation();
  const { popularRooms } = useGetPopularRooms();

  // error access location 
  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    )
  };

  // loading location
  if (!location) return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello
        <Text style={styles.currentUser}> {currentUser.displayName ?? "User"}</Text>
        , welcome to
        <Text style={styles.roomies}> Roomies</Text>
      </Text>
      <View style={styles.separator} lightColor="rgba(0,0,0,.1)" darkColor="rgba(0,0,0,.1)" />
      <Text style={[{ paddingHorizontal: 15, paddingBottom: 6, width: "100%", fontSize: 20 }, styles.currentUser]}>Popular Rooms</Text>
      <FlatListDashboardComponent
        popularRooms={popularRooms}
        location={location}
        onPressRoom={() => { }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "rgba(255,255,255,.9)",
    paddingVertical: 50,
  },
  title: {
    width: "100%",
    paddingHorizontal: 15,
    fontSize: 20,
    fontWeight: '500',
    color: "rgba(0,0,0,.6)",
  },
  currentUser: {
    fontWeight: '700',
    color: "rgba(0,0,0,1)",
  },
  roomies: {
    color: "#fe000099"
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width:"90%",
    marginHorizontal: 5
  },
});