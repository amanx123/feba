import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import GuestsScreen from "./screens/GuestsScreen";
import AddGuest from "./screens/AddGuest";
import GuestsState from "./context/GuestsState";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GuestsState>
      <NavigationContainer>
        <Stack.Navigator>
          {/*Screens*/}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GuestList" component={GuestsScreen} />
          <Stack.Screen name="AddGuest" component={AddGuest} />
        </Stack.Navigator>
      </NavigationContainer>
    </GuestsState>
  );
}
