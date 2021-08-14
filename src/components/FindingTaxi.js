import React, { useCallback, useRef, useMemo, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { LinearProgress } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { setMapScreen, getSelectedCar } from "../slices/navSlice";

const FindingTaxi = ({ navigation }) => {
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();
  const selectedRide = useSelector(getSelectedCar);
  const snapPoints = useMemo(() => ["75%", "100%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    dispatch(
      setMapScreen({ mapScreenHeight: "h-3/4", navigationHeight: "h-1/4" })
    );
  }, []);

  useEffect(() => {
    let timeout;
    if (navigation) {
      timeout = setTimeout(() => {
        navigation.navigate("SharedRide");
      }, 6000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [navigation]);

  // renders
  return (
    <View style={tw`bg-white flex-1`}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <LinearProgress color="primary" value={1} style={tw`mb-4`} />

        <View style={styles.contentContainer}>
          <View
            style={tw`bg-blue-100 rounded-full flex items-center justify-center`}
          >
            <Image
              style={[
                {
                  width: 65,
                  height: 65,
                  resizeMode: "contain",
                },
              ]}
              source={{
                uri: selectedRide?.image,
              }}
            />
          </View>
          <Text style={tw`text-xl font-medium mt-4`}>
            Finding your {selectedRide?.title}
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default FindingTaxi;
