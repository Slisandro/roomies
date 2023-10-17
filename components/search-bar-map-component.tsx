import React from 'react';
import { TouchableOpacity, TextInput, View } from "react-native";
import Icon from "./icon-component";

export default function SearchBarMapComponent() {
    return (
        <View
            style={{
                position: "absolute",
                top: 45,
                width: "100%",
                zIndex: 50,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 25,
                backgroundColor: "transparent"
            }}
        >
            <View
                style={{
                    display: "flex",
                    backgroundColor: "transparent",
                    width: "75%",
                    height: "100%"
                }}
            >
                <TextInput
                    style={{
                        width: "100%",
                        color: "#ffffff75",
                        backgroundColor: "#00000050",
                        padding: 15,
                        paddingLeft: 20,
                        borderRadius: 10,
                        height: "100%",
                        fontSize: 20
                    }}
                >
                    Buscar ciudad
                </TextInput>
                {/* <TouchableOpacity>
                    <Text style={{ borderBottomWidth: 1, borderBottomColor: "#fff" }}>Filtros</Text>
                </TouchableOpacity> */}
            </View>
            <TouchableOpacity style={{ backgroundColor: "#00000050", padding: 15, borderRadius: 10 }}>
                <Icon
                    family='Ionicons'
                    color='#fff'
                    name='add'
                    key={"icon_add"}
                    size={25}
                />
            </TouchableOpacity>
        </View>
    )
}