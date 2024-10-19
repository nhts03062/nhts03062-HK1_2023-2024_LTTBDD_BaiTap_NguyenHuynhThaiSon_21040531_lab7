import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen_01 from "./screens/Screen_01";
import Screen_02 from "./screens/Screen_02";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen_01"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_02" component={Screen_02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
