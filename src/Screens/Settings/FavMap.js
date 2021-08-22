import React, { useRef, useEffect, useState } from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites, getFavorites } from "../../slices/userSlice";

const FavMap = ({ route, navigation }) => {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const favInfo = useSelector(getFavorites);
  const { routeParam } = route.params;

  const filterFavItem = favInfo.filter(
    (item) => item.routeParam === routeParam
  );

  useEffect(() => {
    mapRef.current.fitToSuppliedMarkers(["origin"], {
      edgePadding: { top: 10, right: 50, bottom: 50, left: 50 },
    });
  }, [favInfo, location]);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (currentLocation) {
    text = JSON.stringify(currentLocation);
  }

  const handleSetCurrent = () => {
    setLocation({
      latitude: currentLocation?.coords?.latitude,
      longitude: currentLocation?.coords?.longitude,
    });
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={tw`flex-row items-center px-6`}>
        <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
          <Icon name="arrow-back" type="ionicon" size={32} />
        </TouchableOpacity>
        <View style={tw`w-11/12`}>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                backgroundColor: "#ededed",
                borderRadius: 4,
                fontSize: 16,
                height: 38,
                fontWeight: "bold",
              },
            }}
            enablePoweredByContainer={false}
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            // textInputProps={{
            //   value: null,
            // }}
            returnKeyType={"search"}
            onPress={(data, details = null) => {
              setLocation(null);
              dispatch(
                setFavorites({
                  location: details.geometry.location,
                  description: data.description,
                  routeParam,
                })
              );
            }}
            fetchDetails={true}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
          />
        </View>
      </View>
      <View style={tw`h-full`}>
        <MapView
          ref={mapRef}
          style={tw`flex-1`}
          mapType="mutedStandard"
          showsUserLocation={true}
          flat={true}
          initialRegion={{
            latitude: filterFavItem[0]?.location?.lat,
            longitude: filterFavItem[0]?.location?.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: filterFavItem[0]?.location?.lat,
              longitude: filterFavItem[0]?.location?.lng,
            }}
            identifier="origin"
          >
            <Icon name="pin" size={32} type="ionicon" color="#000000" />
          </Marker>
        </MapView>
        <View
          style={tw`absolute flex justify-end items-end inset-x-0 bottom-28 `}
        >
          <TouchableOpacity
            onPress={handleSetCurrent}
            style={tw`bg-gray-100 z-50 p-3 rounded-full shadow-lg w-12 mb-4 mr-8`}
          >
            <Icon name="locate" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-black py-3 mx-8 bg-black w-80 ${
              !favInfo && "bg-gray-200"
            }`}
            disabled={!favInfo}
          >
            <Text style={tw`text-center text-white text-xl`}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavMap;
