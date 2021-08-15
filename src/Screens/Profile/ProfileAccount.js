import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

import { Icon } from "react-native-elements";
import EditAccount from "./EditAccount";
import ProfileList from "./ProfileList";

const Profile = createStackNavigator();

const ProfileAccount = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1`}>
      <Profile.Navigator
        initialRouteName="ProfileAccountDetails"
        screenOptions={{
          headerTintColor: "#000",
          headerStyle: { shadowColor: "#fff", elevation: 0 },
        }}
      >
        <Profile.Screen
          name="ProfileAccountDetails"
          component={ProfileAccountDetails}
          options={{
            title: "",
            headerLeft: () => (
              <Icon
                name="menu-outline"
                type="ionicon"
                color="#000"
                size={30}
                style={{ paddingLeft: 20 }}
                backgroundColor="#fff"
                onPress={() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <Icon
                name="create-outline"
                type="ionicon"
                color="#000"
                size={30}
                style={{ paddingRight: 20 }}
                backgroundColor="#fff"
                onPress={() => navigation.navigate("EditAccount")}
              />
            ),
          }}
        />
        <Profile.Screen
          name="EditAccount"
          component={EditAccount}
          options={{ title: "Edit Profile" }}
        />
      </Profile.Navigator>
    </View>
  );
};

export default ProfileAccount;

const ProfileAccountDetails = () => {
  //   const myCustomShare = async() => {
  //     const shareOptions = {
  //       message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
  //       url: files.appLogo,
  //       // urls: [files.image1, files.image2]
  //     }

  //     try {
  //       const ShareResponse = await Share.open(shareOptions);
  //       console.log(JSON.stringify(ShareResponse));
  //     } catch(error) {
  //       console.log('Error => ', error);
  //     }
  //   };

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://mpng.subpng.com/20180802/su/kisspng-rowan-atkinson-mr-bean-s-holiday-film-720p-index-of-wp-content-uploads-2013-11-5b62ec2c17a857.0940305515332096440969.jpg",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={tw`text-2xl font-semibold mt-2`}>John Doe</Title>
            <Caption style={tw`text-base font-medium`}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon
            name="location-outline"
            type="ionicon"
            color="#777777"
            size={20}
          />
          <Text style={tw`ml-4 text-gray-500`}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="call-outline" type="ionicon" color="#777777" size={20} />
          <Text style={tw`ml-4 text-gray-500`}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="mail-outline" type="ionicon" color="#777777" size={20} />
          <Text style={tw`ml-4 text-gray-500`}>john_doe@email.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>₹140.50</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Rides</Caption>
        </View>
      </View>
      <ProfileList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
