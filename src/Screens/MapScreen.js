import React from "react";
import { View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";

import NavigateCard from "../components/NavigateCard";
import Map from "../components/Map";
import RideOptionsCard from "../components/RideOptionsCard";
import FindingTaxi from "../components/FindingTaxi";
import { getMapScreenHeighit } from "../slices/navSlice";
import SharedRide from "../components/SharedRide";

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const windowHeight = useSelector(getMapScreenHeighit);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-100 z-50 p-3 rounded-full shadow-lg absolute top-16 left-4`}
      >
        <Icon name="arrow-back-outline" type="ionicon" />
      </TouchableOpacity>
      <View
        style={tw`${windowHeight ? windowHeight.mapScreenHeight : "h-1/2"}`}
      >
        <Map />
      </View>
      <View
        style={tw`${
          windowHeight ? windowHeight.navigationHeight : "h-1/2"
        } bg-white`}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FindingTaxi"
            component={FindingTaxi}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SharedRide"
            component={SharedRide}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
