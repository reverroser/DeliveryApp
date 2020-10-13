import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { Text } from "react-native";

import Restaurants from "./screens/Restaurants";
import Restaurant from "./screens/Restaurant";
import MenuItem from "./screens/MenuItem";
import OrderForm from "./screens/OrderForm";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Lato_400Regular,
    Lato_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={Restaurants} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="MenuItem" component={MenuItem} />
        <Stack.Screen name="OrderForm" component={OrderForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
