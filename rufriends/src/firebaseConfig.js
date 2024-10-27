// Import the functions you need from the SDKs you need
import "firebase/auth";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSPlOGEX6u6v-Bs7CE5204DsjJh62q99A",
  authDomain: "rufriends-database.firebaseapp.com",
  projectId: "rufriends-database",
  storageBucket: "rufriends-database.appspot.com",
  messagingSenderId: "482555236756",
  appId: "1:482555236756:web:ea773a34a3edb2e2b23f81",
  measurementId: "G-QVX8TDXW6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };