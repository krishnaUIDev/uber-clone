import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import Login from "./src/Screens/Auth/Login";
import ForgotPass from "./src/Screens/Auth/ForgotPass";
import Signup from "./src/Screens/Auth/Signup";
import OnBoardingScreen from "./src/Screens/OnBoardingScreens";
import DrawerRoutes from "./src/components/DrawerRoutes";
import Rides from "./src/Screens/Rides";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import TripDetails from "./src/Screens/Rides/TripDetails";
import Receipt from "./src/Screens/Rides/Receipt";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="loginScreen"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotPass}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const RidesStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="RideScreen"
      screenOptions={{
        headerStyle: { shadowColor: "#fff", elevation: 0 },
      }}
    >
      <Stack.Screen
        name="RideScreen"
        component={Rides}
        options={{
          title: "",
          headerLeft: () => (
            <Icon
              name="close"
              type="ionicon"
              color="#000"
              size={30}
              style={{ paddingLeft: 20 }}
              backgroundColor="#fff"
              onPress={() => navigation.navigate("HomeScreen")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="TripDetails"
        component={TripDetails}
        options={{
          title: "",
          headerLeft: () => (
            <Icon
              name="arrow-back-outline"
              type="ionicon"
              color="#000"
              size={30}
              style={{ paddingLeft: 20 }}
              backgroundColor="#fff"
              onPress={() => navigation.navigate("RideScreen")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={{
          title: "",
          headerLeft: () => (
            <Icon
              name="arrow-back-outline"
              type="ionicon"
              color="#000"
              size={30}
              style={{ paddingLeft: 20 }}
              backgroundColor="#fff"
              onPress={() => navigation.navigate("TripDetails")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />
      {/* Navigation Drawer as a landing page */}
      <Stack.Screen
        name="DrawerNavigationRoutes"
        component={DrawerRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rides"
        component={RidesStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
