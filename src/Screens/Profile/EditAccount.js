import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Avatar, Icon, ListItem, Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../slices/userSlice";

const list = [
  {
    title: "Account Details",
    icon: "person-circle-outline",
    color: "#28B7FC",
  },
  {
    title: "Settings",
    icon: "settings-outline",
  },
  {
    title: "Contact Us",
    icon: "call",
    color: "#7BFF33",
  },
];

const EditAccount = ({ navigation }) => {
  const userDetails = useSelector(getUserDetails);
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw``}>
        <View style={tw`items-center p-6`}>
          <Text style={tw`text-xl font-semibold pb-6`}>My Profile</Text>
          <View>
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri: userDetails?.image,
              }}
            />
          </View>
          <Text style={tw`text-lg font-medium italic`}>
            {userDetails?.name}
          </Text>
        </View>
        <View style={tw`px-2`}>
          {list.map((item, i) => (
            <ListItem key={i} onPress={() => console.log("tst")}>
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
    </SafeAreaView>
  );
};

export default EditAccount;

const styles = StyleSheet.create({});
