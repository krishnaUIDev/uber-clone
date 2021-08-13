import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Avatar } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";

import { getUserDetails } from "../../slices/userSlice";
import AccountDetails from "./AccountDetails";
import ProfileList from "./ProfileList";
import ProfileSettings from "./ProfileSettings";

const Stack = createStackNavigator();

const EditAccount = ({ navigation }) => {
  const userDetails = useSelector(getUserDetails);
  return (
    <SafeAreaView style={tw`bg-white`}>
      <View style={tw``}>
        <View style={tw`items-center p-6 h-2/5`}>
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
        <View style={tw`h-3/5`}>
          <Stack.Navigator initialRouteName="profileList">
            <Stack.Screen
              name="profileList"
              component={ProfileList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="accountDetails"
              component={AccountDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profileSettings"
              component={ProfileSettings}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditAccount;

const styles = StyleSheet.create({});
