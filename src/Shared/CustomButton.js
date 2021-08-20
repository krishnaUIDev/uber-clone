import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const CustomButton = ({ label, handlePress, bgColor }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={tw`bg-${bgColor} w-20 items-center px-2 py-2 justify-center rounded-full`}
    >
      <Text style={tw`text-white text-sm text-center`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
