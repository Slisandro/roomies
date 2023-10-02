import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../../components/Themed';
import { serviceResetPassword } from '../../services/auth';

export default function ResetPasswordLayout() {
    const [email, setEmail] = React.useState<string>("");
    const [code, setCode] = React.useState<string>("");
    const navigation = useNavigation();

    const handleRegister = () => {
        serviceResetPassword(email);
        // .then(() => alert("Email enviado"))
        // .catch(error => alert(JSON.stringify(error)))
    };

    // @ts-expect-error
    const handleLogin = () => navigation.navigate('index')

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Roomies</Text>
            <Text style={{ fontSize: 25 }}>Create account</Text>
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={(e: string) => setEmail(e)}
                value={email}
            />
            <TouchableOpacity onPress={handleRegister} style={styles.register}>
                <Text>Send Email</Text>
            </TouchableOpacity>
            <TextInput
                placeholder="Validate Code"
                editable={false}
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={(p: string) => setCode(p)}
                value={code}
            />
            <Text style={styles.login}>
                Already have an account?
                <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                    <Text style={{ fontWeight: "500", fontSize: 19 }}>Login</Text>
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
    register: {
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
    login: { color: '#000000', fontSize: 18, justifyContent: "center", alignItems: "center", paddingTop: 10 },
    loginButton: { fontWeight: "600", fontSize: 19, color: "#ff00ff", paddingRight: 5 },
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