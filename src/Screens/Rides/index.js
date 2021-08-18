import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { db, auth } from "../../firebase";

const Rides = () => {
  const [rides, setRides] = useState(null);

  useEffect(() => {
    const unsubscribe = db
      .collection("rides")
      .doc(auth.currentUser.uid)
      .collection("completedRides")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snap) =>
        setRides(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    // console.log(unsubscribe);
    // return unsubscribe;
  }, []);

  console.log(rides, "rides");

  return (
    <View>
      <Text>Rides</Text>
    </View>
  );
};

export default Rides;

const styles = StyleSheet.create({});
