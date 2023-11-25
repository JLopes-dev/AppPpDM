import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TabRoutes from "./TabRoutes";

export default function StackRoutes() {
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home" 
            component={TabRoutes}
            options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
            }}/>
             <Stack.Screen
            name="Register" 
            component={Register}
            options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
            }}/>
            <Stack.Screen
            name="Login" 
            component={Login}
            options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}