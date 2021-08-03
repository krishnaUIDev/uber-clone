import React from "react";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Home = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Home;
