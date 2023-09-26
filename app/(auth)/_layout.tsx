import { useNavigation } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { View, Text } from '../../components/Themed';
import app from '@react-native-firebase/app';

export default function TabLayout() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   // @ts-expect-error
    //   .then(() => navigation.navigate('(tabs)'))
    //   .catch(error => alert(JSON.stringify(error)))
  }
  // const onPress = () => {
  //   // @ts-expect-error
  //   navigation.navigate('/(tabs)');
  // };
  return (
    <View style={styles.container}>
      <Text style={{ color: '#e93766', fontSize: 40 }}>Login</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={(e: string) => setEmail(e)}
        value={email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={(p: string) => setPassword(p)}
        value={password}
      />
      <Button title="Login" color="#e93766" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  login: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    fontSize: 15
  },
  textInput: {
    height: 40,
    fontSize: 20,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15
  }
});