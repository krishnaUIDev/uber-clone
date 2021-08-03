import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "ride",
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627852371/uber-assets/Heroimages/HeroCar_quvgmp-Thumbnail_n1ows7.webp",
    label: "Ride",
    banner: false,
  },
  {
    id: "food",
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627852556/uber-assets/Heroimages/food_sa9z3q.png",
    label: "Food",
    banner: false,
  },
  {
    id: "Grocery",
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627852807/uber-assets/Heroimages/grocery_yqpq09.png",
    label: "Grocery",
    banner: true,
  },
  {
    id: "package",
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627852934/uber-assets/Heroimages/box_z6qxtw.png",
    label: "Package",
    banner: false,
  },
  {
    id: "reserve",
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627853102/uber-assets/Heroimages/reserve_cfl2wf.png",
    label: "Reserve",
    banner: false,
  },
  {
    id: "Rent",
    image:
      "https://res.cloudinary.com/dkenwnhn8/image/upload/v1627853081/uber-assets/Heroimages/car-rental_zvswwx.png",
    label: "Rent",
    banner: false,
  },
];

const HeroCard = () => {
  const numColumns = 3;

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return data;
  };
  return (
    <FlatList
      data={formatData(data, numColumns)}
      // data={data}
      keyExtractor={(item) => item.id}
      // horizontal
      numColumns={numColumns}
      renderItem={({ item: { label, image, banner } }) => (
        <View style={tw`p-2 flex-1`}>
          <TouchableOpacity
            style={tw`bg-gray-100 my-4 mr-2 h-20 rounded-lg items-center`}
          >
            <Image
              style={{
                width: 20,
                height: 18,
                padding: 22,
                marginTop: 10,
                resizeMode: "contain",
                alignItems: "center",
              }}
              source={{ uri: image }}
            />
            {banner && (
              <View style={tw`bg-green-500 rounded-b-lg`}>
                <Text style={tw`text-center text-white text-xs`}>Promo</Text>
              </View>
            )}
          </TouchableOpacity>
          <Text style={tw`text-sm font-medium -mt-4`}>{label}</Text>
        </View>
      )}
    />
  );
};

export default HeroCard;

const styles = StyleSheet.create({});
