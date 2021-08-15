import React, { useRef, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import BottomSheet from "@gorhom/bottom-sheet";

import { getUserDetails } from "../../slices/userSlice";

const EditAccount = () => {
  const bsRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["40%", "30%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const userDetails = useSelector(getUserDetails);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <BottomSheet
        ref={bsRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
      <View style={tw``}>
        <View style={tw`items-center p-6 h-1/3`}>
          <View>
            <TouchableOpacity
              onPress={() => bottomSheetRef.current.snapPoints(0)}
            >
              <View>
                <ImageBackground
                  source={{ uri: userDetails?.image }}
                  style={tw`h-32 w-32 opacity-70`}
                  imageStyle={{ borderRadius: 100 }}
                >
                  <View style={tw`flex-1 justify-end items-end`}>
                    <Icon
                      name="camera-sharp"
                      type="ionicon"
                      size={26}
                      color="#fff"
                      style={tw`opacity-100 justify-center items-center border border-white bg-gray-500 rounded-full`}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={tw`text-lg font-medium italic`}>
            {userDetails?.name}
          </Text>
        </View>
        <View style={tw`h-3/5`}>
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditAccount;

const styles = StyleSheet.create({});
