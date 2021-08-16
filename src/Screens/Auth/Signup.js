import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import firebase from "firebase";
import { Avatar, Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                onChangeText={(name) => setName(name)}
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
                placeholder="Email"
                onChangeText={(name) => setEmail(name)}
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
                placeholder="Password"
                onChangeText={(name) => setPass(name)}
              />
              <View style={tw`items-center`}>
                <Button
                  title="Signup"
                  color="white"
                  buttonStyle={{
                    backgroundColor: "#57534E",
                    width: 240,
                    borderRadius: 20,
                  }}
                  onPress={onSignUp}
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
