import { useNavigation } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { View, Text } from '../../components/Themed';
import auth from '../../firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabLayout() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      // @ts-expect-error
      .then(() => navigation.navigate('(tabs)'))
      .catch(error => alert(JSON.stringify(error)))
  };

  const handleRegister = () => null //navigation.navigate('(auth)/register.tsx')

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Roomies</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <Text onPress={handleRegister} style={styles.register}>
        Already have an account?
      </Text>
      <TouchableOpacity style={styles.registerButton}>Register</TouchableOpacity>
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
    fontSize: 15,
  },
  button: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
  },
  register: { color: '#000000', fontSize: 18, justifyContent: "center", alignItems: "center", paddingTop: 10 },
  registerButton: { fontWeight: "600", fontSize: 19, color: "#ff00ff", paddingRight: 5 },
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