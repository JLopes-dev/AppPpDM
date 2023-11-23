import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Button from "../components/Button"

export default function Question() {
    const navigation = useNavigation()
    const voltar = () => {
        navigation.navigate('Home' as never)
    }
    return(
        <View>
            <Text>Cadastro</Text>
            <Button
            legenda='Voltar'
            onclick={() => voltar()}
            styleText='Perguntar'
            />
        </View>
    )
}