import { View, Text } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    const questioner = () => {
        console.log("Function not implemented");
    }
    return(
        <View>
        </View>
    )
}