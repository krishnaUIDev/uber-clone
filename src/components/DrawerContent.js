import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import tw from "tailwind-react-native-classnames";

import { Icon } from "react-native-elements";
import { setTheme, getTheme, getUserDetails } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const drawerItems = [
  {
    id: 1,
    label: "Home",
    icon: "home-sharp",
    to: "HomeScreen",
  },
  {
    id: 2,
    label: "Wallet",
    icon: "wallet-sharp",
    to: "Wallet",
    subType: "Cash",
  },
  {
    id: 3,
    label: "Send a Gift",
    icon: "gift-sharp",
    to: "Gift",
  },
  {
    id: 4,
    label: "Settings",
    icon: "cog-sharp",
    to: "Settings",
  },
  {
    id: 5,
    label: "Help",
    icon: "help-sharp",
    to: "Help",
  },
];

export function DrawerContent(props) {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(getTheme);
  const userInfo = useSelector(getUserDetails);
  const [selected, setSelected] = React.useState(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={tw`bg-black`}>
        <View
          style={tw`pl-4 pb-2 flex-row mt-16 items-center border-b border-gray-200`}
        >
          <Avatar.Image
            source={{
              uri: userInfo?.image,
            }}
            size={50}
          />
          <View style={{ marginLeft: 15, flexDirection: "column" }}>
            <Title
              style={tw`text-white text-base font-semibold `}
              onPress={() => {
                props.navigation.navigate("EditAccount");
              }}
            >
              {userInfo?.name}
            </Title>
            <Caption style={tw`text-white text-xs font-normal`}>
              5.00
              <Icon name="star-sharp" type="ionicon" size={12} color="yellow" />
            </Caption>
          </View>
        </View>
      </View>

      <Drawer.Section
        style={[
          tw`bg-black`,
          {
            contentContainer: {
              color: "white",
            },
          },
        ]}
        title={
          <Text style={tw`text-white text-xs font-extralight`}>
            Do more with your account
          </Text>
        }
      >
        <TouchableRipple onPress={() => {}}>
          <View style={styles.preference}>
            <Text style={tw`text-white`}>
              Messages
              <Icon
                name="ellipse"
                type="ionicon"
                size={10}
                color="blue"
                style={tw`ml-2 pt-3`}
              />
            </Text>
            <View pointerEvents="none">
              <Icon
                name="chevron-forward-sharp"
                type="ionicon"
                size={15}
                color="white"
              />
            </View>
          </View>
        </TouchableRipple>
        <DrawerItem
          label="Get food delivery"
          labelStyle={{ color: "#ffff" }}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
      </Drawer.Section>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <Drawer.Section style={styles.drawerSection}>
          {drawerItems &&
            drawerItems.map((item) => (
              <DrawerItem
                style={tw`${item.id === selected?.id && "bg-blue-100"}`}
                key={item?.id}
                icon={({ color, size }) => (
                  <Icon
                    name={item?.icon}
                    type="ionicon"
                    color={color}
                    size={size}
                  />
                )}
                label={() => (
                  <>
                    <Text style={tw`text-sm text-gray-600 font-normal`}>
                      {item?.label}
                    </Text>
                    {item?.subType && (
                      <Text style={tw`text-xs font-light`}>
                        {item?.subType}
                      </Text>
                    )}
                  </>
                )}
                onPress={() => {
                  props.navigation.navigate(item.to);
                  setSelected(item);
                }}
              />
            ))}
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => dispatch(setTheme(!selectedTheme))}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={selectedTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="log-out-sharp"
              type="ionicon"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => props.navigation.navigate("Auth")}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    // marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
