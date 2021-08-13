import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Avatar, Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <KeyboardAvoidingView enabled>
          <View style={tw`p-12`}>
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
                  {/* OR */}
                </Text>
                <Text
                  style={tw`text-lg font-semibold text-blue-500`}
                  onPress={() => navigation.navigate("ForgotScreen")}
                >
                  Forgot Password
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
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
