import React from 'react';
import { StyleSheet } from 'react-native';

import auth from '@react-native-firebase/auth';
import { TextInput, Button } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // React.useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  if (initializing) return null;

  // const onPress = () => {
  //   // @ts-expect-error
  //   navigation.navigate('/(tabs)');
  // };

  if (!user) {
    return (
      <View>
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
        <Button title="Login" color="#e93766" />
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {JSON.stringify(user)}</Text>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <TouchableOpacity onPress={onPress}>
  //       <Text style={styles.login}>Login</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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