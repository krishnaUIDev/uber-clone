import React, { useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon, Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

import { getUserDetails } from "../../slices/userSlice";
import { auth } from "../../firebase";
import firebase from "firebase";

const EditAccount = () => {
  const userDetails = useSelector(getUserDetails);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState(userDetails?.name);
  const [email, setEmail] = useState(userDetails?.email);

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Camera.requestPermissionsAsync();
      return status;
    }
  };

  const handleAddProfilePic = async () => {
    const status = await getPermission();
    if (status !== "granted") {
      alert("We need Access");
      return;
    }
    pickImage();
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
        allowMultiple: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!result.cancelled) {
        setProfile(result.uri);
      }
    } catch (error) {
      console.log(error, "ERROR picImage");
    }
  };

  const onUpdate = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        _updateUserData();
      } else {
        console.log("not login");
      }
    });
  };

  const _updateUserData = () => {
    var userNow = firebase.auth().currentUser;
    userNow
      .updateProfile({
        displayName: name,
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`items-center p-6 h-2/6`}>
        <TouchableOpacity onPress={handleAddProfilePic}>
          <View>
            <ImageBackground
              source={{ uri: profile ? profile : userDetails?.image }}
              style={tw`h-32 w-32 opacity-70`}
              imageStyle={{ borderRadius: 100 }}
            >
              <View style={tw`flex-1 justify-end items-end`}>
                <Icon
                  name="camera-sharp"
                  type="ionicon"
                  size={26}
                  color="#fff"
                  style={tw`opacity-100 justify-center items-center border border-white bg-gray-500 rounded-full`}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw` h-4/6`}>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="First Name"
            onChangeText={(name) => setName(name)}
            returnKeyType="next"
            autoCapitalize="none"
            keyboardType="default"
            value={name}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            onChangeText={(name) => setEmail(name)}
            returnKeyType="next"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
          />
        </View>
        <View style={tw`items-center`}>
          <Button
            title="Update"
            color="white"
            buttonStyle={{
              backgroundColor: "#57534E",
              width: 260,
              borderRadius: 20,
            }}
            onPress={onUpdate}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditAccount;

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    margin: 8,
  },
});
