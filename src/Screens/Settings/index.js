import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon, Avatar, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { getFavorites, getUserDetails } from "../../slices/userSlice";

const safetyList = [
  {
    title: "Manage Trusted Contacts",
    subTitle: "Share your trip status with family and friends in a single tap",
    icon: "tty",
    to: "",
  },
  {
    title: "Verify Your Ride",
    subTitle: "Use a PIN to make sure you get in the right car",
    icon: "dialpad",
    to: "",
  },
  {
    title: "RideCheck",
    subTitle: "Manage your RideCheck notifications",
    icon: "done",
    to: "",
  },
];

export default function Settings({ navigation }) {
  const userInfo = useSelector(getUserDetails);
  const favPlaces = useSelector(getFavorites);
  return (
    <SafeAreaView style={tw`bg-gray-100 h-full`}>
      <View style={tw`flex-row justify-between  px-4 bg-white`}>
        <Text style={tw`text-4xl font-semibold`}>Settings</Text>
      </View>
      <ScrollView>
        <ListItem>
          <Icon
            name="person"
            type="ionicon"
            color="#9CA3AF"
            size={40}
            style={tw`bg-gray-100 rounded-full p-4`}
          />
          <ListItem.Content onPress={() => {}}>
            <ListItem.Title style={tw`text-sm font-medium`}>
              <View>
                <Text style={tw`text-base`}>{userInfo?.name}</Text>
                <Text style={tw`text-base`}>{userInfo?.phone || "--"}</Text>
                <Text style={tw`text-base`}>{userInfo?.email}</Text>
              </View>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <View style={tw`p-6`}>
          <Text style={tw`text-lg`}>Favorites</Text>
        </View>
        <ListItem
          style={tw`border-b border-gray-100`}
          onPress={() =>
            navigation.navigate("FavMap", {
              routeParam: "home",
            })
          }
        >
          <Icon
            name="home"
            type="ionicon"
            color="#FFF"
            size={16}
            style={tw`bg-blue-500 rounded-full p-2 ml-2`}
          />
          <ListItem.Content>
            <ListItem.Title>
              <View>
                <Text style={tw`text-base font-semibold`}>Add Home</Text>
                <Text style={tw`text-sm font-normal`}>9727 touchton road</Text>
              </View>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem
          style={tw`border-b border-gray-100`}
          onPress={() =>
            navigation.navigate("FavMap", {
              routeParam: "work",
            })
          }
        >
          <Icon
            name="briefcase"
            type="ionicon"
            color="#FFF"
            size={16}
            style={tw`bg-blue-500 rounded-full p-2 ml-2`}
          />
          <ListItem.Content>
            <ListItem.Title style={tw`text-sm`}>
              <View>
                <Text style={tw`text-base font-semibold`}>Add Work</Text>
                <Text style={tw`text-sm font-normal`}>9727 touchton road</Text>
              </View>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <TouchableOpacity
          onPress={() => navigation.navigate("SavedPlaces")}
          style={tw`px-6 py-4 bg-white`}
        >
          <Text style={tw`text-blue-700 font-semibold`}>More Saved Places</Text>
        </TouchableOpacity>
        <View style={tw`p-6`}>
          <Text style={tw`text-lg`}>Safety</Text>
        </View>

        {safetyList.map((item, i) => (
          <ListItem
            key={i}
            onPress={() => {}}
            style={tw`border-b border-gray-100`}
          >
            <Icon
              name={item?.icon}
              type="material"
              size={30}
              style={tw`ml-2`}
            />
            <ListItem.Content>
              <ListItem.Title>
                <View>
                  <Text style={tw`text-base font-semibold`}>{item.title}</Text>
                  <Text style={tw`text-sm font-light`}>{item.subTitle}</Text>
                </View>
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
        <TouchableOpacity style={tw`px-6 py-4 mt-4 bg-white`}>
          <Text style={tw`text-red-500`}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
