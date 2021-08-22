import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import { db, auth } from "../../firebase";
import tw from "tailwind-react-native-classnames";
import CustomButton from "../../Shared/CustomButton";
import RideMap from "./RideMap";

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
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View
        style={tw`flex-row justify-between items-center content-center px-4 mb-2 border-b border-gray-100`}
      >
        <Text style={tw`text-4xl font-semibold`}>Your Trips</Text>
        <CustomButton label="Past" bgColor="gray-500" />
      </View>
      <View style={tw`p-2`}>
        <CustomButton label="Rides" bgColor="black" />
      </View>
      <FlatList
        data={rides}
        keyExtractor={(item) => item.id}
        // numColumns={numColumns}
        renderItem={({ item: { data } }) => <RideMap data={data} />}
      />
    </SafeAreaView>
  );
};

export default Rides;

const styles = StyleSheet.create({});
