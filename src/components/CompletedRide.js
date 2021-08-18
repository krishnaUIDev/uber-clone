import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector } from "react-redux";
import { db, auth } from "../firebase";
import {
  selectOrigin,
  selectDesination,
  getSelectedCar,
} from "../slices/navSlice";
import firebase from "firebase";

const CompletedRide = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDesination);
  const selectedCar = useSelector(getSelectedCar);

  const onCompletedRide = () => {
    db.collection("rides")
      .doc(auth.currentUser.uid)
      .collection("completedRides")
      .add({
        origin,
        destination,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        selectedCar,
      });
  };
  return (
    <View>
      <Button title="Completed Ride" onPress={onCompletedRide} />
    </View>
  );
};

export default CompletedRide;

const styles = StyleSheet.create({});
