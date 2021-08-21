import React from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

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

const index = () => {
  const navigation = useNavigation();
  const data = headerData[Math.floor(Math.random() * headerData.length)];

  return (
    <View>
      <Header
        backgroundColor={data?.backgroundColor}
        placement="left"
        leftComponent={{
          icon: "menu",
          color: data?.textColor,
          style: { paddingLeft: 20 },
          onPress: () => navigation.openDrawer(),
        }}
        containerStyle={{ borderBottomColor: data?.backgroundColor }}
      />
      <View
        style={[
          tw`p-6 pl-8 pr-0`,
          {
            backgroundColor: data?.backgroundColor,
            borderBottomRightRadius: 130,
          },
        ]}
      >
        <View style={tw``}>
          <Text
            style={tw`text-2xl font-semibold tracking-wide text-${data?.textColor}`}
          >
            {data?.title}
          </Text>
          <Text
            style={tw`text-sm font-normal pt-2 tracking-tight text-${data?.textColor}`}
          >
            {data?.subTitle}
          </Text>
          <View style={tw`flex-row justify-between items-center`}>
            <TouchableOpacity
              // onPress={() => navigation.navigate("RideOptionsCard")}
              style={tw`bg-black w-${data?.buttonWidth} items-center px-2 py-2 mt-4 justify-center rounded-full`}
            >
              <Text style={tw`text-white text-sm text-center`}>
                {data?.buttonContent}
              </Text>
            </TouchableOpacity>
            <Image
              style={[
                tw``,
                {
                  width: 65,
                  height: 65,
                  resizeMode: "contain",
                  // transform: [{ rotate: "-65deg" }],
                },
              ]}
              source={{
                uri: data?.image,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
