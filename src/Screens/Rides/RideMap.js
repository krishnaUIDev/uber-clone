import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/core";

const RideMap = ({ data }) => {
  const navigation = useNavigation();

  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 10, right: 50, bottom: 50, left: 50 },
    });
  }, []);

  const rideDate = new Date(data.timeStamp.seconds * 1000);

  return (
    <TouchableOpacity onPress={() => navigation.navigate("TripDetails")}>
      <View style={tw`flex-row justify-between items-center p-4`}>
        <Text>{rideDate.toDateString()}</Text>
        <View style={tw`flex-row items-center`}>
          <Text>$0.00</Text>
          <Icon name="chevron-forward-outline" type="ionicon" size={16} />
        </View>
      </View>
      <View style={tw`h-28`}>
        <MapView
          ref={mapRef}
          style={tw`flex-1`}
          mapType="mutedStandard"
          flat={true}
          initialRegion={{
            latitude: data?.origin?.location?.lat,
            longitude: data?.origin?.location?.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: data?.origin?.location?.lat,
              longitude: data?.origin?.location?.lng,
            }}
            identifier="origin"
          >
            <Icon name="car-sport-sharp" type="ionicon" color="#4B5563" />
          </Marker>

          <MapViewDirections
            origin={data?.origin?.description}
            destination={data?.destination?.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeColor="#374151"
            strokeWidth={3}
          />
          <Marker
            coordinate={{
              latitude: data?.destination?.location?.lat,
              longitude: data?.destination?.location?.lng,
            }}
            identifier="destination"
          >
            <Icon name="location-sharp" type="ionicon" color="#4B5563" />
          </Marker>
        </MapView>
      </View>
    </TouchableOpacity>
  );
};

export default RideMap;

const styles = StyleSheet.create({});
