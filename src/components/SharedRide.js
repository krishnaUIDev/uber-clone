import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { setMapScreen } from "../slices/navSlice";
import CompletedRide from "./CompletedRide";

const SharedRide = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setMapScreen({ mapScreenHeight: "h-1/2", navigationHeight: "h-1/2" })
    );
  }, []);
  return (
    <View>
      <Text>test</Text>
      {/* temperory */}
      <CompletedRide />
    </View>
  );
};

export default SharedRide;

const styles = StyleSheet.create({});
