import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Development from "./Development";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const Construction = () => {
  return (
    <View>
      <View style={tw`h-1/2 items-center`}>
        <Development />
      </View>
      <View style={tw`h-1/2 items-center justify-center`}>
        <Text style={tw`text-2xl items-center justify-center`}>
          Under Construction ...
          <Icon name="hammer-sharp" type="ionicon" />
        </Text>
      </View>
    </View>
  );
};

export default Construction;

const styles = StyleSheet.create({});
