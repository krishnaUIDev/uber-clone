import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
// import * as firebase from "firebase";
// import { FIREBASE_APIKEY } from "@env";

import StackRoutes from "./StackRoutes";

// const firebaseConfig = {
//   apiKey: FIREBASE_APIKEY,
//   authDomain: "taxi-app-ba183.firebaseapp.com",
//   projectId: "taxi-app-ba183",
//   storageBucket: "taxi-app-ba183.appspot.com",
//   messagingSenderId: "245299482506",
//   appId: "1:245299482506:web:88126d13a843bdc18f0273",
//   measurementId: "G-XZV74ZZC3Z",
// };

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
            <StackRoutes />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
