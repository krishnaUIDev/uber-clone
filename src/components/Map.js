import React, { useRef, useEffect } from "react";
import { StyleSheet, Image, Animated, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { Icon } from "react-native-elements";

import {
  selectDesination,
  selectOrigin,
  setTravelTimeInformation,
  getNearBy,
  setNearBy,
} from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";

const cars = [
  {
    id: "0",
    type: "UberX",
    lat: 30.3321838,
    lng: -81.65565099999999,
  },
  {
    id: "1",
    type: "UberPet",
    lat: 31.3321838,
    lng: -81.65565099999999,
  },
  {
    id: "2",
    type: "UberXL",
    lat: 30.3321838,
    lng: -81.65565099999999,
  },
  {
    id: "3",
    type: "Comfort",
    lat: 30.3321838,
    lng: -81.65565099999999,
  },
  {
    id: "4",
    type: "Black",
    lat: 30.3321838,
    lng: -81.65565099999999,
  },
  {
    id: "5",
    type: "BlackSUV",
    lat: 30.3321838,
    lng: -81.65565099999999,
  },
];

const getImage = (type) => {
  if (type === "UberX") {
    return "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844215/uber-assets/UberX_slzxf1.webp";
  } else if (type === "UberPet") {
    return "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/UberX_Pet_uwu6wy.png";
  } else if (type === "UberXL") {
    return "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/UberXL_g7akai.webp";
  } else if (type === "Comfort") {
    return "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844215/uber-assets/UberX_slzxf1.webp";
  } else if (type === "Black") {
    return "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/Black_v1_hgs0ns.png";
  } else if (type === "BlackSUV") {
    return "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/BlackSUV_v1_mzvzwk.png";
  }
};

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDesination);
  const nearByCars = useSelector(getNearBy);

  const mapRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  useEffect(() => {
    if (!origin) return;
    const getNearByLat = async () => {
      const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${origin?.location?.lat},${origin?.location?.lng}&key=${GOOGLE_MAPS_APIKEY}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setNearBy(data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getNearByLat();
  }, [origin]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      showsUserLocation={true}
      flat={true}
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {nearByCars &&
        nearByCars.map((car) => (
          <Marker
            key={car.id}
            coordinate={{
              latitude: car.lat,
              longitude: car.lng,
            }}
            title={car.type}
          >
            <Image
              source={{
                uri: getImage(car?.type),
              }}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
              }}
            />
          </Marker>
        ))}
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor="#374151"
          strokeWidth={3}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat,
            longitude: origin?.location?.lng,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        >
          <Icon name="car-sport-sharp" type="ionicon" color="#4B5563" />
        </Marker>
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination?.location?.lat,
            longitude: destination?.location?.lng,
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
        >
          <Icon name="location-sharp" type="ionicon" color="#4B5563" />
        </Marker>
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
