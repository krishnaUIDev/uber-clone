import React from "react";
import { StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon, ListItem } from "react-native-elements";

const list = [
  {
    title: "Your Favorites",
    icon: "heart-circle-sharp",
    color: "#FF6347",
    to: "accountDetails",
  },
  {
    title: "Payment",
    icon: "card-sharp",
    color: "#FF6347",
    to: "accountDetails",
  },
  {
    title: "Tell Your Friends",
    icon: "share-social-sharp",
    color: "#FF6347",
    to: "profileSettings",
  },
  {
    title: "Support",
    icon: "help-buoy-sharp",
    color: "#FF6347",
    to: "accountDetails",
  },
];

const ProfileList = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`mt-2`}>
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
    </View>
  );
};

export default ProfileList;

const styles = StyleSheet.create({});
