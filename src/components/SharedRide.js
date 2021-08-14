import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { setMapScreen } from "../slices/navSlice";

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
    </View>
  );
};

export default SharedRide;

const styles = StyleSheet.create({});
