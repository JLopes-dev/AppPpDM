import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Pergunta from "../screens/Pergunta";
import Cadastro from "../screens/Cadastro";

export default props => {
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Login" 
            component={Login}
            options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
            }}/>
             <Stack.Screen
            name="Cadastro" 
            component={Cadastro}
            options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
            }}/>
            <Stack.Screen
            name="Home" 
            component={Home}
            options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
            }}/>
            <Stack.Screen
            name="Pergunta" 
            component={Pergunta}
            options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}