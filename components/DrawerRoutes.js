import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";
import Home from "../screens/Home";
import Trips from "../screens/Trips";
import Gift from "../screens/Gift";
import Help from "../screens/Help";
import Profile from "../screens/Profile";
import Wallet from "../screens/Wallet";
import Settings from "../screens/Settings";
import EditAccount from "../screens/Profile/EditAccount";

const DrawerRoutes = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={Home} />
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
