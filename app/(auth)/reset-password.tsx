import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../../components/Themed';
import { serviceResetPassword } from '../../services/auth';
import Icon from '../../components/icon-component';
import Container from 'toastify-react-native';

export default function ResetPasswordLayout() {
    const [email, setEmail] = React.useState<string>("");
    // const [code, setCode] = React.useState<string>("");
    const navigation = useNavigation();

    const handleResetPassword = () => {
        serviceResetPassword(email);
        // .then(() => alert("Email enviado"))
        // .catch(error => alert(JSON.stringify(error)))
    };

    // @ts-expect-error
    const handleLogin = () => navigation.navigate('index')

    return (
        <View style={styles.container}>
            <Container position="top" />
            <View style={styles.resetPasswordContainer}>
                <Text style={styles.resetPassword}>Reset password in</Text>
                <Text style={styles.roomies}>Roomies</Text>
            </View>
            <Text style={styles.title}>Enter your email and we will send magic code in your email</Text>
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
            <TouchableOpacity onPress={handleResetPassword} style={styles.resetPasswordBtn}>
                <Text style={styles.resetPasswordLabel}>Send Email</Text>
            </TouchableOpacity>
            {/* <Text style={styles.title}>Enter code. Check your email</Text>
            <View style={styles.containerTextInput}>
                <Icon family="FontAwesome" name="asterisk" size={15} color={"#00000050"} style={{ paddingLeft: 4 }} />
                <TextInput
                    placeholder="Validate Code"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(e: string) => setCode(e)}
                    value={code}
                />
            </View>
            <TouchableOpacity onPress={handleResetPassword} style={styles.resetPasswordBtn}>
                <Text style={styles.resetPasswordLabel}>Send Email</Text>
            </TouchableOpacity> */}
            <View style={styles.loginContainer}>
                <Text style={styles.login}>
                    Go to
                </Text>
                <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
                    <Text style={styles.loginLabel}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    resetPasswordContainer: {
        display: "flex",
        alignItems: "flex-start",
        gap: 8,
        paddingLeft: 15,
        paddingBottom: 10,
        backgroundColor: "#fff"
    },
    resetPassword: {
        fontSize: 40,
        fontWeight: "700",
        color: "#000"
    },
    roomies: {
        fontSize: 40,
        fontWeight: "700",
        color: "#fe000099",
    },
    title: {
      width: "100%",
      opacity: .45,
      paddingLeft: 15,
      paddingBottom: 30,
      fontSize: 25,
      fontWeight: '600',
      color: "#000"
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
        backgroundColor: "#fff"
    },
    textInput: {
        height: 45,
        fontSize: 25,
        fontWeight: '600',
        width: '75%',
        color: "#00000050"
    },
    resetPasswordBtn: {
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
    resetPasswordLabel: {
        fontSize: 25,
        fontWeight: "600",
        textAlign: "center",
        color: "#fff",
    },
    loginContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginLeft: "auto",
        paddingHorizontal: 25,
        gap: 5,
        backgroundColor: "#fff"
    },
    login: {
        fontSize: 22,
        fontWeight: "500",
        color: "#00000050",
    },
    loginBtn: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        borderBottomColor: "#fe000099",
        borderBottomWidth: 1,
    },
    loginLabel: {
        fontSize: 22,
        fontWeight: "600",
        padding: 0,
        color: "#fe000099",
        opacity: 1,
    }
});