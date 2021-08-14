import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

export default function Wallet() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-8 px-4`}>
        <Text style={tw`text-2xl font-bold self-center`}>Wallet</Text>
        <View
          style={[tw`flex-row justify-between items-center mt-4`, styles.card]}
        >
          <View>
            <Text style={tw`text-2xl font-semibold`}>Uber Cash</Text>
            <Text style={tw`text-4xl font-bold pt-2`}>$11</Text>
            <Text style={tw`text-base font-normal py-2`}>
              Auto-refill is off
            </Text>
            <TouchableOpacity
              style={tw`flex flex-row bg-black w-40 mt-4 h-14 items-center justify-between px-8 py-3 rounded-full `}
            >
              <Icon name="plus" type="font-awesome" color="white" size={16} />
              <Text style={tw`text-white text-base text-center`}>
                Add funds
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Icon name="chevron-forward-sharp" type="ionicon" size={40} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 4,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // shadowRadius: 1,
  },
});
