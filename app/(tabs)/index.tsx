import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import auth from '../../firebase/auth';

export default function TabOneScreen() {
  const { currentUser } = auth;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello 
        <Text style={styles.currentUser}> {currentUser.displayName ?? "User"}</Text>
        , welcome to
        <Text style={styles.roomies}> Roomies</Text>
      </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 75
  },
  title: {
    width: "100%",
    paddingHorizontal: 15,
    fontSize: 20,
    fontWeight: '500',
  },
  currentUser: {
    fontWeight: '700',
  },
  roomies: {
    color: "#fe000099"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    paddingHorizontal: 10
  },
});