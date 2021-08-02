import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
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
import { setTheme, getTheme } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

export function DrawerContent(props) {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(getTheme);
  return (
    <View style={{ flex: 1 }}>
      <View style={tw`bg-black`}>
        <View
          style={tw`pl-4 pb-2 flex-row mt-16 items-center border-b border-gray-200`}
        >
          <Avatar.Image
            source={{
              uri: "https://mpng.subpng.com/20180802/su/kisspng-rowan-atkinson-mr-bean-s-holiday-film-720p-index-of-wp-content-uploads-2013-11-5b62ec2c17a857.0940305515332096440969.jpg",
            }}
            size={50}
          />
          <View style={{ marginLeft: 15, flexDirection: "column" }}>
            <Title style={tw`text-white text-base font-semibold `}>
              Krishna Kanth
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
            Do more with your account{" "}
          </Text>
        }
      >
        <TouchableRipple onPress={() => {}}>
          <View style={styles.preference}>
            <Text style={tw`text-white`}>Messages</Text>
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
        <DrawerItem
          labelStyle={{ color: "#ffff" }}
          label="Make money driving"
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
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="analytics-sharp"
                type="ionicon"
                color={color}
                size={size}
              />
            )}
            label="Your trips"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="wallet-sharp"
                type="ionicon"
                color={color}
                size={size}
              />
            )}
            label="Wallet"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="help-sharp"
                type="ionicon"
                color={color}
                size={size}
              />
            )}
            label="Help"
            onPress={() => {
              props.navigation.navigate("BookmarkScreen");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="gift-sharp"
                type="ionicon"
                color={color}
                size={size}
              />
            )}
            label="Send a Gift"
            onPress={() => {
              props.navigation.navigate("SettingsScreen");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="cog-sharp" type="ionicon" color={color} size={size} />
            )}
            label="Settings"
            onPress={() => {
              props.navigation.navigate("SupportScreen");
            }}
          />
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
    marginTop: 15,
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
