import React from 'react';
import { StyleSheet } from 'react-native';

import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from './components/Themed';

export default function RegisterScreen() {
    const navigation = useNavigation();
    const onLogin = () => {
        // @ts-expect-error
        navigation.navigate('/(tabs)');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onLogin}>
                <Text style={styles.login}>Register</Text>
            </TouchableOpacity>
        </View>
    );
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
    }
});