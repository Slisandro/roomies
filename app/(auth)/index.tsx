import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container, { Toast } from 'toastify-react-native';
import { Text, View } from '../../components/Themed';
import { serviceLogin } from '../../services/auth';

export default function TabLayout() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigation = useNavigation();

  const handleLogin = async () => await serviceLogin(email, password);

  // @ts-expect-error
  const handleRegister = () => navigation.navigate('register');

  // @ts-expect-error
  const handleResetPassword = () => navigation.navigate('reset-password');

  return (
    <View style={styles.container}>
      <Container position="top" />
      <Text style={{ fontSize: 40 }}>Roomies</Text>
      <Text style={{ fontSize: 25 }}>Login</Text>
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
      <TouchableOpacity onPress={handleResetPassword} style={styles.registerButton}><Text style={{ textAlign: "right" }}>Reset password</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.login}>
        <Text style={{ fontSize: 19 }}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.register}>
        Already have an account?
        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
          <Text style={{ fontWeight: "500", fontSize: 19 }}>Register</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
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
  register: {
    color: '#000000',
    fontSize: 18,
    marginTop: 15
  },
  registerButton: {
  },
  textInput: {
    height: 40,
    fontSize: 20,
    width: '90%',
    color: "#000",
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15
  }
});