import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import {
  selectTravelInfo,
  setMapScreen,
  setSelectedCar,
} from "../slices/navSlice";

const data = [
  {
    id: "Uber-X",
    title: "UberX",
    multiplier: 1,
    occupency: 3,
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844215/uber-assets/UberX_slzxf1.webp",
  },
  {
    id: "Uber-Pet",
    title: "Uber Pet",
    multiplier: 1.2,
    occupency: 3,
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/UberX_Pet_uwu6wy.png",
  },
  {
    id: "Uber-XL",
    title: "Uber XL",
    occupency: 5,
    multiplier: 1.4,
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/UberXL_g7akai.webp",
  },
  {
    id: "Comfort",
    title: "Comfort",
    occupency: 5,
    multiplier: 1.5,
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844215/uber-assets/UberX_slzxf1.webp",
  },
  {
    id: "Black",
    title: "Black",
    occupency: 3,
    multiplier: 1.75,
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/Black_v1_hgs0ns.png",
  },
  {
    id: "Black-SUV",
    title: "Black SUV",
    multiplier: 2,
    occupency: 5,
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627844344/uber-assets/BlackSUV_v1_mzvzwk.png",
  },
];
// surge charge rate
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelInfo);

  useEffect(() => {
    dispatch(
      setMapScreen({ mapScreenHeight: "h-1/2", navigationHeight: "h-1/2" })
    );
  }, []);

  const handleChange = () => {
    dispatch(setSelectedCar(selected));
    navigation.navigate("FindingTaxi");
  };

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute left-2 p-3 z-50 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-2 text-lg`}>
          Select a Ride - {travelTimeInfo?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        style={tw`h-4`}
        keyExtractor={(item) => item.id}
        renderItem={({
          item: { image, title, multiplier, id, occupency },
          item,
        }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-2 ${
              id === selected?.id && "bg-gray-200"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={[
                tw`mr-3`,
                {
                  width: 80,
                  height: 80,
                  resizeMode: "contain",
                },
              ]}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <View style={tw`flex flex-row items-center`}>
                <Text style={tw`text-lg font-semibold`}>{title}</Text>
                {id === selected?.id && (
                  <>
                    <Icon
                      style={tw`ml-2`}
                      size={16}
                      name="people"
                      type="ionicon"
                    />
                    <Text style={tw`ml-1`}>{selected?.occupency}</Text>
                  </>
                )}
              </View>
              <Text style={tw`flex flex-wrap`}>
                {travelTimeInfo?.duration?.text} drop off
              </Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInfo?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
          disabled={!selected}
          onPress={handleChange}
        >
          <Text style={tw`text-center text-white text-xl `}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
