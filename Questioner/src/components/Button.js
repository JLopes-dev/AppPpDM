import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default props => {
    return(
        <TouchableOpacity style={props.style} onPress={props.onclick}>
            <Text style={props.styleText}>{props.legenda}</Text>
        </TouchableOpacity>
    )
}