import React from "react";
import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const Receipt = () => {
  return (
    <SafeAreaView style={tw`bg-white`}>
      <View style={tw`flex-row justify-between  px-4`}>
        <Text style={tw`text-4xl font-semibold`}>Recepit</Text>
      </View>
      <ScrollView style={tw`h-full`}>
        <View
          style={[
            tw`px-4 pb-12 flex-row justify-between items-end h-80`,
            { backgroundColor: "#c6daff", borderBottomRightRadius: 130 },
          ]}
        >
          <View>
            <Text style={tw`text-base`}>June 21,2011</Text>
            <Text style={tw`text-3xl font-semibold`}>
              Here's your {"\n"} reciept for {"\n"} your ride,{"\n"}{" "}
              Krishnakanth
            </Text>
          </View>
          {/* <View>
            <Image
              source={{
                uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png",
              }}
              style={{ height: 50, width: 50 }}
            />
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Receipt;
