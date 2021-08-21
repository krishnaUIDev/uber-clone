import React from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";

const HeaderBaner = ({ data }) => {
  return (
    <View
      style={[
        tw`p-6 pl-8 pr-0`,
        {
          backgroundColor: data?.backgroundColor,
          borderBottomRightRadius: 130,
        },
      ]}
    >
      <View>
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
  );
};

export default HeaderBaner;
