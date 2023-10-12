import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from 'toastify-react-native';
import Icon from '../../components/Icon';
import { Text, View } from '../../components/Themed';
import { ResponseService, serviceLogin } from '../../services/auth';

export default function TabLayout() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isShowPassword, setShowPassword] = React.useState<boolean>(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    const responseLogin: ResponseService = await serviceLogin(email, password);
    if (!responseLogin.error && responseLogin.data) {
      // @ts-expect-error
      return navigation.navigate('(tabs)')
    }
  };

  // @ts-expect-error
  const handleRegister = () => navigation.navigate('register');

  // @ts-expect-error
  const handleResetPassword = () => navigation.navigate('reset-password');

  return (
    <View style={styles.container}>
      <Container position="top" />
      <View style={styles.containerLogin}>
        <Text style={styles.login}>Login in</Text>
        <Text style={styles.roomies}>Roomies</Text>
      </View>
      <Text style={styles.title}>Please sign in to continue</Text>
      <View style={styles.containerTextInput}>
        <Icon family="MaterialCommunityIcons" name="email-outline" size={20} color={"#00000050"} />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(e: string) => setEmail(e)}
          value={email}
        />
      </View>
      <View style={styles.containerTextInput}>
        <Icon family="FontAwesome" name="asterisk" size={15} color={"#00000050"} style={{ paddingLeft: 4}} />
        <TextInput
          secureTextEntry={!isShowPassword}
          placeholder="Password"
          autoCapitalize="none"
          style={[styles.textInput, { paddingLeft: 4 }]}
          onChangeText={(p: string) => setPassword(p)}
          value={password}
        />
        {isShowPassword ?
          <Icon onPress={() => setShowPassword(!isShowPassword)} family="EvilIcons" size={30} name="unlock" color={"#00000050"} /> :
          <Icon onPress={() => setShowPassword(!isShowPassword)} family="EvilIcons" size={30} name="lock" color={"#00000050"} />
        }
      </View>
      <TouchableOpacity onPress={handleResetPassword} style={styles.resetPasswordBtn}>
        <Text style={styles.resetPasswordLabel}>
          Reset password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.loginLabel}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.register}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={handleRegister} style={styles.registerBtn}>
          <Text style={styles.registerLabel}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
  containerLogin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    paddingLeft: 15,
    paddingBottom: 10,
    backgroundColor: "#fff"
  },
  login: {
    fontSize: 40,
    fontWeight: "700",
    color: "#000"
  },
  roomies: {
    fontSize: 40,
    fontWeight: "700",
    color: "#fe000099"
  },
  title: {
    width: "100%",
    color: "#000",
    opacity: .45,
    paddingLeft: 15,
    paddingBottom: 30,
    fontSize: 25,
    fontWeight: '600',
  },
  containerTextInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
    width: "90%",
    paddingVertical: 5,
    borderColor: '#9b9b9b50',
    borderBottomWidth: 2,
    gap: 10,
    backgroundColor: "#fff",
  },
  textInput: {
    height: 45,
    fontSize: 25,
    fontWeight: '600',
    width: '75%',
    color: "#000",
    opacity: .5,
    backgroundColor: "#fff",
  },
  resetPasswordBtn: {
    width: 'auto',
    marginTop: 5,
    marginHorizontal: 25,
    marginLeft: 'auto',
    paddingHorizontal: 2,
  },
  resetPasswordLabel: {
    fontSize: 18,
    color: "#fe000099",
    fontWeight: "600"
  },
  loginBtn: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "auto",
    marginVertical: 30,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#FFFFFF",
    backgroundColor: "#fe000099"
  },
  loginLabel: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
  registerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: "auto",
    paddingHorizontal: 25,
    gap: 5,
    backgroundColor: "#fff",
  },
  register: {
    fontSize: 22,
    fontWeight: "500",
    color: "#00000050",
  },
  registerBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    borderBottomColor: "#fe000099",
    borderBottomWidth: 1,
  },
  registerLabel: {
    fontSize: 22,
    fontWeight: "600",
    padding: 0,
    color: "#fe000099",
    opacity: 1,
  }
});