import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";
import Home from "../Screens/Home";
import Trips from "../Screens/Trips";
import Help from "../Screens/Help";
import Profile from "../Screens/Profile";
import Wallet from "../Screens/Wallet";
import Settings from "../Screens/Settings";
import ProfileAccount from "../Screens/Profile/ProfileAccount";

const DrawerRoutes = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      {/* SideBar */}
      <Drawer.Screen
        name="HomeScreen"
        component={Home}
        initialRouteName="HomeScreen"
      />
      <Drawer.Screen name="Trips" component={Trips} />
      {/* <Drawer.Screen name="Rides" component={Rides} /> */}
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="ProfileAccount" component={ProfileAccount} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
