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

const DrawerRoutes = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeDrawer"
        component={Home}
        initialRouteName="Home"
      />
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
