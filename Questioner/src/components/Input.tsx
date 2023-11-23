import { TextInput, View } from "react-native";

interface Props {
    style: any
    senha: boolean
    legenda: string
    valor: string
    onChange: (e: string) => void
}
export default function Input(props: Props) {
    
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