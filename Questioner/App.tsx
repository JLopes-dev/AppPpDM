import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/StackRoutes";

export default function App() {
  
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
