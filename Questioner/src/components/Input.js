import { TextInput, View } from "react-native";

export default props => {

    return(
        <View style={{ width: '100%', alignItems: 'center' }}>
            <TextInput
            style={props.style} 
            secureTextEntry={props.senha}
            placeholder={props.legenda}
            placeholderTextColor='black'
            defaultValue={props.valor}
            onChangeText={(e) => props.onChange(e)}/>
        </View>
    )
}