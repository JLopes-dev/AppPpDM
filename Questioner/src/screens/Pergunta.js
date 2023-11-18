import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Botao from "../components/Botao"
export default props => {
    const navigation = useNavigation()
    const voltar = () => {
        navigation.navigate('Home')
    }
    return(
        <View>
            <Text>Cadastro</Text>
            <Botao
            legenda='Voltar'
            onclick={() => voltar()}/>
        </View>
    )
}