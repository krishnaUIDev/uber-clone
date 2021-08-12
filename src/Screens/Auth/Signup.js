import React from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput } from "react-native";
import { Avatar, Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const Signup = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-12`}>
        <Text style={tw`text-xl font-semibold text-gray-700`}>
          Create new account
        </Text>
        <View style={tw`items-center h-1/4 mt-4`}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri: "https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png",
            }}
          />
        </View>
        <View style={tw`h-3/4`}>
          <TextInput
            style={{
              height: 40,
              borderColor: "#E5E5E5",
              borderWidth: 2,
              borderRadius: 20,
              textAlign: "center",
              marginBottom: 15,
            }}
            placeholder="First Name"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "#E5E5E5",
              borderWidth: 2,
              borderRadius: 20,
              textAlign: "center",
              marginBottom: 15,
            }}
            placeholder="Last Name"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "#E5E5E5",
              borderWidth: 2,
              borderRadius: 20,
              textAlign: "center",
              marginBottom: 15,
            }}
            type="number"
            placeholder="Phone Number"
          />
          <View style={tw`items-center`}>
            <Button
              title="Send Code"
              color="white"
              buttonStyle={{
                backgroundColor: "#57534E",
                width: 240,
                borderRadius: 20,
              }}
            />
            <Text style={tw`text-base p-4 font-extralight text-opacity-30`}>
              OR
            </Text>
            <Text style={tw`text-lg font-semibold text-blue-500`}>
              Sign up with E-mail
            </Text>
            <Text
              style={tw`text-xs p-4 font-normal  text-center text-opacity-30`}
            >
              By creating an account you agree with our Terms of Use
            </Text>
          </View>
          <View>
            <Text style={tw`font-semibold text-center mt-2`}>
              Created with ❤ by Krishna
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
