import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import Question from "../screens/Question";
import User from "../screens/User";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabRoutes({  }) {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator initialRouteName="Home" 
        screenOptions={{
            tabBarLabelStyle: {
                color: 'black'
            },
            tabBarStyle:{
                backgroundColor: "#FFFF00",
            },
            tabBarActiveTintColor: "white",
        }}>
            <Tab.Screen 
            name="Question" 
            component={Question}
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="alpha-q-box" color='black' size={26} />
                  ),
                title: "Perguntar",
                headerTransparent: true,
                headerShown: false,
            }}/>
             <Tab.Screen  
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" color='black' size={26} />
                  ),
                  title: "Início",
                  headerTransparent: true,
                  headerShown: false,
            }}/>
            <Tab.Screen 
            name="User" 
            component={User}
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="account" color='black' size={26} />
                  ),
                  title: "Usuário",
                  headerTransparent: true,
                  headerShown: false,
            }}/>
        </Tab.Navigator>
    )
}