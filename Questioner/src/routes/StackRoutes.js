import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Question from "../screens/Question";
import Register from "../screens/Register";

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
            name="Register" 
            component={Register}
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
        </Stack.Navigator>
    )
}