// import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../../components/Themed';
import { serviceRegister } from '../../services/auth';
import Icon from '../../components/Icon';
import Container from 'toastify-react-native';

// const DEFAULTIMAGE = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"

export default function TabLayout() {
    // const [image, setImage] = React.useState<string>(DEFAULTIMAGE);
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [isShowPassword, setShowPassword] = React.useState<boolean>(false);
    const navigation = useNavigation();

    const handleRegister = async () => {
        // @ts-expect-error
        const responseRegister: ResponseService = await serviceRegister({
            displayName: name,
            email,
            password
        });
        console.log({ responseRegister })
        if (!responseRegister.error && responseRegister.data) {
            // @ts-expect-error
            return navigation.navigate('(tabs)')
        }
    };

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });

    //     if (!result.canceled) {
    //         setImage(result.assets[0].uri);
    //     }
    // };

    // @ts-expect-error
    const handleLogin = () => navigation.navigate('index')

    return (
        <View style={styles.container}>
            <Container position="top" />
            <View style={styles.registerContainer}>
                <Text style={styles.register}>Register in</Text>
                <Text style={styles.roomies}>Roomies</Text>
            </View>
            {/* <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
                <Image
                    source={{ uri: image }}
                    style={{ width: "100%", height: "100%", padding: 1 }}
                />
            </TouchableOpacity> */}
            <View style={styles.containerTextInput}>
                <Icon family="AntDesign" name="user" size={20} color={"#00000050"} />
                <TextInput
                    placeholder="Name"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(e: string) => setName(e)}
                    value={name}
                />
            </View>
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
                <Icon family="FontAwesome" name="asterisk" size={15} color={"#00000050"} style={{ paddingLeft: 4 }} />
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
            <View style={styles.containerTextInput}>
                <Icon family="FontAwesome" name="asterisk" size={15} color={"#00000050"} style={{ paddingLeft: 4 }} />
                <TextInput
                    secureTextEntry={!isShowPassword}
                    placeholder="Reset password"
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
            <TouchableOpacity onPress={handleRegister} style={styles.registerBtn}>
                <Text style={styles.registerLabel}>Register</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={styles.login}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
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
    registerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,
        paddingLeft: 15,
        paddingBottom: 10,
        marginBottom: 25,
        backgroundColor: "#fff"
    },
    register: {
        fontSize: 40,
        fontWeight: "700",
        color: "#000"
    },
    roomies: {
        fontSize: 40,
        fontWeight: "700",
        color: "#fe000099"
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: "#000",
        width: 80,
        height: 80,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 15
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
        color: "#00000050",
        backgroundColor: "#fff"
    },
    registerBtn: {
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
    registerLabel: {
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