import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import Question from "../screens/Question";
import User from "../screens/User";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabRoutes({  }) {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={{
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
                  )
            }}/>
             <Tab.Screen name="Home" 
            component={Home}
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" color='black' size={26} />
                  )
            }}/>
            <Tab.Screen 
            name="User" 
            component={User}
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="account" color='black' size={26} />
                  )
            }}/>
        </Tab.Navigator>
    )
}