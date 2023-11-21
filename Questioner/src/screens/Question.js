import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Button from "../components/Button"
export default props => {
    const navigation = useNavigation()
    const voltar = () => {
        navigation.navigate('Home')
    }
    return(
        <View>
            <Text>Cadastro</Text>
            <Button
            legenda='Voltar'
            onclick={() => voltar()}/>
        </View>
    )
}