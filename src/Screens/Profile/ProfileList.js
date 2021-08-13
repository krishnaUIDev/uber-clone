import React from "react";
import { StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon, ListItem, Button } from "react-native-elements";

const list = [
  {
    title: "Account Details",
    icon: "person-circle-outline",
    color: "#28B7FC",
    to: "accountDetails",
  },
  {
    title: "Settings",
    icon: "settings-outline",
    to: "profileSettings",
  },
];

const ProfileList = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`px-2`}>
        {list.map((item, i) => (
          <ListItem key={i} onPress={() => navigation.navigate(item.to)}>
            <Icon name={item.icon} type="ionicon" color={item?.color} />
            <ListItem.Content>
              <ListItem.Title style={tw`text-sm font-medium`}>
                {item.title}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
      <Button
        style={tw`px-6`}
        title="Logout"
        type="outline"
        onPress={() => navigation.navigate("Auth")}
      />
    </View>
  );
};

export default ProfileList;

const styles = StyleSheet.create({});
