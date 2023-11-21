import { View, Text } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default props => {
    const navigation = useNavigation()
    
    return(
        <View>
            <Text>Oi</Text>
            <Button
            legenda='Perguntar' 
            onclick={() => perguntar()}/>
        </View>
    )
}