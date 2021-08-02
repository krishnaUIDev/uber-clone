import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { Icon } from "react-native-elements";

import NavOptions from "../components/NavOptions";
import { setDesination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";
import HeroCard from "../components/HeroCard";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleMenu = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <TouchableOpacity
          style={tw`z-50 p-3 absolute left-4`}
          onPress={handleMenu}
        >
          <Icon name="menu" />
        </TouchableOpacity>
        <Image
          style={{ width: 100, height: 80, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <HeroCard />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              backgroundColor: "#DDDDDF",
              borderRadius: 0,
              fontSize: 16,
            },
          }}
          enablePoweredByContainer={false}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Where From?"
          debounce={400}
          returnKeyType={"search"}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDesination(null));
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
