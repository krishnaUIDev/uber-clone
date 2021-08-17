import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native-elements";
import Onboarding from "react-native-onboarding-swiper";
import SvgComponent from "../SVG/OnBoarding1";
import SvgComponen from "../SVG/OnBoarding2";
import SvgCompone from "../SVG/OnBoarding3";

const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <Onboarding
      showDone={false}
      onSkip={() => navigation.replace("Auth")}
      pages={[
        {
          title: "Hey!",
          subtitle: "Welcome to Taxi app!",
          backgroundColor: "green",
          image: <SvgComponent />,
          imageContainerStyles: {
            height: 200,
          },
        },
        {
          title: "Fast Responds",
          subtitle: "",
          backgroundColor: "#29B6FB",
          image: <SvgComponen />,
        },
        {
          title: "Enjoy the Ride",
          subtitle: (
            <Button
              title={"Get Started"}
              buttonStyle={{
                backgroundColor: "#57534E",
                width: 140,
                borderRadius: 20,
              }}
              onPress={() => navigation.replace("Auth")}
            />
          ),
          backgroundColor: "#fff",
          image: <SvgCompone />,
        },
      ]}
    />
  );
};

export default OnBoarding;
