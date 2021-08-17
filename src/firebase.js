import * as firebase from "firebase";
import { FIREBASE_APIKEY } from "@env";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: "taxi-app-ba183.firebaseapp.com",
  projectId: "taxi-app-ba183",
  storageBucket: "taxi-app-ba183.appspot.com",
  messagingSenderId: "245299482506",
  appId: "1:245299482506:web:88126d13a843bdc18f0273",
  measurementId: "G-XZV74ZZC3Z",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
