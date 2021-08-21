import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const index = ({ data }) => {
  const navigation = useNavigation();
  return (
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
  );
};

export default index;
