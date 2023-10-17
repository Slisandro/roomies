import { AntDesign, FontAwesome, MaterialCommunityIcons, EvilIcons, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { GestureResponderEvent } from "react-native";

export default function Icon(props: {
    family: "AntDesign" | "FontAwesome" | "MaterialCommunityIcons" | "EvilIcons" | "MaterialIcons" | "Ionicons"
    name: React.ComponentProps<typeof FontAwesome | typeof AntDesign | typeof MaterialCommunityIcons | typeof EvilIcons | typeof Ionicons>['name'];
    color: string;
    size?: number;
    onPress?: (event: GestureResponderEvent) => void;
    style?: StyleProp<TextStyle>
}) {
    // @ts-expect-error
    return props.family === "FontAwesome" ? <FontAwesome onPress={props.onPress} size={props.size || 28} {...props} /> :
        // @ts-expect-error
        props.family === "AntDesign" ? <AntDesign onPress={props.onPress} size={props.size || 28} {...props} />
            // @ts-expect-error
            : props.family === "EvilIcons" ? <EvilIcons onPress={props.onPress} size={props.size || 28} {...props} />
                // @ts-expect-error
                : props.family === "MaterialCommunityIcons" ? <MaterialCommunityIcons onPress={props.onPress} size={props.size || 28} {...props} />
                    // @ts-expect-error
                    : <Ionicons onPress={props.onPress} size={props.size || 28} {...props} />;
}

// { marginTop: 2 }