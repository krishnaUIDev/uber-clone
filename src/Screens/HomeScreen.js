import React from "react";
import { StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";

import NavOptions from "../components/NavOptions";
import { setDesination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";
import HeroCard from "../components/HeroCard";
import Header from "./Header";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={tw`bg-white`}>
      <Header />
      <View style={tw`p-4`}>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              backgroundColor: "#eeeeee",
              borderRadius: 4,
              fontSize: 16,
              height: 60,
              fontWeight: "bold",
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
