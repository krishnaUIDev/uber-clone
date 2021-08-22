import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";

import NavOptions from "../components/NavOptions";
import { setDesination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";
import Header from "./Header";
import { auth } from "../firebase";
import { setUser } from "../slices/userSlice";
import HeaderBaner from "./Header/HeaderBaner";

const headerData = [
  {
    title: "Go out with Uber",
    subTitle: "Go meet your crew and enjoy the return of in-person hangs",
    backgroundColor: "#008C8C",
    buttonContent: "Ride now",
    textColor: "white",
    buttonWidth: 20,
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/UberX_Pet_uwu6wy.png",
  },
  {
    title: "Time to ride in comfort",
    subTitle: "Ask your driver to lower the temperature through the app",
    backgroundColor: "#1EA5FC",
    buttonContent: "Ride in Comfort",
    textColor: "white",
    buttonWidth: 36,
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/UberXL_g7akai.webp",
  },
  {
    title: "$20 off",
    subTitle: "You have a promo to use",
    backgroundColor: "#46b276",
    buttonContent: "Order now",
    textColor: "white",
    buttonWidth: 24,
    image: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/wings.png",
  },
];

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        image: auth?.currentUser?.photoURL,
        email: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
        phone: auth?.currentUser?.phoneNumber,
      })
    );
  }, [auth]);

  const data = headerData[Math.floor(Math.random() * headerData.length)];

  return (
    <View style={tw`bg-white`}>
      <Header data={data} />
      <View>
        <HeaderBaner data={data} />
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
                height: 50,
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
