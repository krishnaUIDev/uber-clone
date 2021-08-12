import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";
import Home from "../Screens/Home";
import Trips from "../Screens/Trips";
import Gift from "../Screens/Gift";
import Help from "../Screens/Help";
import Profile from "../Screens/Profile";
import Wallet from "../Screens/Wallet";
import Settings from "../Screens/Settings";
import EditAccount from "../Screens/Profile/EditAccount";
import OnBoardingScreens from "../Screens/OnBoardingScreens";
import Signup from "../Screens/Auth/Signup";
import Login from "../Screens/Auth/Login";
import ForgotPass from "../Screens/Auth/ForgotPass";

const DrawerRoutes = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="onBoarding"
        component={OnBoardingScreens}
        initialRouteName="onBoarding"
      />
      {/* Auth */}
      <Drawer.Screen name="signup" component={Signup} />
      <Drawer.Screen name="login" component={Login} />
      <Drawer.Screen name="forgot" component={ForgotPass} />

      {/* SideBar */}
      <Drawer.Screen name="HomeScreen" component={Home} />
      <Drawer.Screen name="Trips" component={Trips} />
      <Drawer.Screen name="Gift" component={Gift} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="EditAccount" component={EditAccount} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
