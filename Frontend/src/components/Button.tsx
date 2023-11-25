import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface Props {
    style?: any
    onclick: () => void
    styleText: any
    legenda: string
}
export default function Button(props: Props) {
    return(
        <TouchableOpacity style={props.style} onPress={props.onclick}>
            <Text style={props.styleText}>{props.legenda}</Text>
        </TouchableOpacity>
    )
}