import { AntDesign, FontAwesome, MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";
import { GestureResponderEvent } from "react-native";

export default function Icon(props: {
    family: "AntDesign" | "FontAwesome" | "MaterialCommunityIcons" | "EvilIcons"
    name: React.ComponentProps<typeof FontAwesome | typeof AntDesign | typeof MaterialCommunityIcons | typeof EvilIcons>['name'];
    color: string;
    size?: number;
    onPress?: (event: GestureResponderEvent) => void;
    style?: StyleProp<TextStyle>
}) {
    // @ts-expect-error
    return props.family === "FontAwesome" ? <FontAwesome onPress={props.onPress} size={props.size || 28} style={StyleProp<TextStyle>} {...props} /> :
        // @ts-expect-error
        props.family === "AntDesign" ? <AntDesign onPress={props.onPress} size={props.size || 28} style={StyleProp<TextStyle>} {...props} />
            // @ts-expect-error
            : props.family === "EvilIcons" ? <EvilIcons onPress={props.onPress} size={props.size || 28} style={StyleProp<TextStyle>} {...props} />
                // @ts-expect-error
                : <MaterialCommunityIcons onPress={props.onPress} size={props.size || 28} style={StyleProp<TextStyle>} {...props} />;
}

// { marginTop: 2 }