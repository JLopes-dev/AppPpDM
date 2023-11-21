import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import Question from "../screens/Question";

export default props => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator sceneContainerStyle={{
            
        }}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Question" component={Question}/>
        </Tab.Navigator>
    )
}