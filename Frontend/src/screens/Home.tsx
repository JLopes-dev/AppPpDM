import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    
    return(
        <View style={style.container}>
            <Text>Home</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#37023A"
    }
})