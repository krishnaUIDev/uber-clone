import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/core";
import { Icon } from "react-native-elements";

const TripDetails = () => {
  const navigation = useNavigation();

  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 10, right: 50, bottom: 50, left: 50 },
    });
  }, []);

  return (
    <SafeAreaView style={tw`bg-white`}>
      <View style={tw`flex-row justify-between  px-4 border-b border-gray-100`}>
        <Text style={tw`text-4xl font-semibold`}>Trip Details</Text>
      </View>
      <View style={tw`h-40`}>
        <MapView
          ref={mapRef}
          style={tw`flex-1`}
          mapType="mutedStandard"
          flat={true}
          initialRegion={{
            latitude: 31.3321838,
            longitude: -81.65565099999999,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: 31.3321838,
              longitude: -81.65565099999999,
            }}
            identifier="origin"
          >
            <Icon name="car-sport-sharp" type="ionicon" color="#4B5563" />
          </Marker>
          <MapViewDirections
            origin={"Jacksonville, FL, USA"}
            destination={"Orlando, FL, USA"}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeColor="#374151"
            strokeWidth={3}
          />
          <Marker
            coordinate={{
              latitude: 31.3321838,
              longitude: -81.65565099999999,
            }}
            identifier="destination"
          >
            <Icon name="location-sharp" type="ionicon" color="#4B5563" />
          </Marker>
        </MapView>
      </View>
      <ScrollView style={tw`h-full`}>
        <View style={tw`px-6`}>
          <View
            style={tw`flex-row justify-between items-center content-center py-2 mb-4`}
          >
            <Text style={tw`text-sm`}>6/21/21 6:46pm</Text>
            <View style={tw`items-end`}>
              <Text style={tw`text-sm`}>$0.00</Text>
              <Text style={tw`text-sm text-blue-600 font-bold`}>Add a tip</Text>
            </View>
          </View>

          {/* receitp */}
          <View
            style={tw`flex-row justify-between items-center content-center flex-wrap mb-4`}
          >
            <View>
              <Icon name="ellipse" type="ionicon" color="#000000" size={10} />
              <Icon
                name="remove"
                type="ionicon"
                color="#9CA3AF"
                size={40}
                style={{ transform: [{ rotate: "90deg" }] }}
              />
              <Icon name="stop" type="ionicon" color="#000000" size={10} />
            </View>
            <View>
              <Text style={tw`text-sm font-light tracking-tight mb-4`}>
                4096 Gate Pkwy, Jacksonville, FL {"\n"} 32266
              </Text>
              <Text style={tw`text-sm font-light tracking-tight`}>
                4096 Gate Pkwy, Jacksonville, FL {"\n"} 32266
              </Text>
            </View>
            <TouchableOpacity
              style={tw`bg-gray-100 p-2 rounded-full`}
              onPress={() => navigation.navigate("Receipt")}
            >
              <Text style={tw`text-sm font-semibold`}>Receipt</Text>
            </TouchableOpacity>
          </View>

          {/* reciept end */}
          <View style={tw`flex-row items-center mb-2`}>
            <Icon
              name="person"
              type="ionicon"
              color="#9CA3AF"
              style={tw`bg-gray-100 rounded-full p-2 mr-2 mt-2`}
            />
            <Text style={tw`text-base`}>Your trip with Ernestro</Text>
          </View>
        </View>
        {/* Help */}
        <View
          style={tw`flex-row justify-between items-center content-center px-6 py-4 border-b border-t border-gray-200`}
        >
          <View>
            <Text style={tw`text-sm tracking-wide pb-2`}>
              After your trip, driver can't see your {"\n"} pickup or dropoff
              address details
            </Text>
            <Text style={tw`text-sm tracking-wide text-blue-600 font-bold`}>
              View what your driver sees
            </Text>
          </View>
          <View
            style={[
              tw`rounded-full p-2`,
              {
                backgroundColor: "#d4e2fc",
              },
            ]}
          >
            <Icon name="lock-closed" type="ionicon" color="#638add" size={28} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TripDetails;
