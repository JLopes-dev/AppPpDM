import { View, Text } from "react-native";
import Botao from "../components/Botao";
import { useNavigation } from "@react-navigation/native";
export default props => {
    const navigation = useNavigation()
    const perguntar = () => {
        navigation.navigate('Pergunta')
    }
    return(
        <View>
            <Text>Oi</Text>
            <Botao
            legenda='Perguntar' 
            onclick={() => perguntar()}/>
        </View>
    )
}