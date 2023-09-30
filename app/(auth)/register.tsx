import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../../components/Themed';
import { serviceRegister } from '../../services/auth';

export default function TabLayout() {
    const [image, setImage] = React.useState(null);
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const navigation = useNavigation();

    const handleRegister = () => {
        serviceRegister(name, email, password);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // @ts-expect-error
    const handleLogin = () => navigation.navigate('index')

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Roomies</Text>
            <Text style={{ fontSize: 25, margin: 15 }}>Create account</Text>
            <TouchableOpacity onPress={pickImage}>
                <Image 
                    source={{ uri: image }} 
                    style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: "#fff", padding: 1 }} 
                />
            </TouchableOpacity>
            <TextInput
                placeholder="Name"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={(e: string) => setName(e)}
                value={name}
            />
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
            <TouchableOpacity onPress={handleRegister} style={styles.register}>
                <Text>Register</Text>
            </TouchableOpacity>
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