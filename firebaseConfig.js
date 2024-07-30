import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeFirestore} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDj_iAwfVzybDKwqfQ9nzfBt7BuRQ-diao",

  authDomain: "job-search-app-da300.firebaseapp.com",

  projectId: "job-search-app-da300",

  storageBucket: "job-search-app-da300.appspot.com",

  messagingSenderId: "26327321029",

  appId: "1:26327321029:web:f47f4019c5da6eed08e3ac",

  measurementId: "G-H9C3YT97C2"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = initializeFirestore(app, {useFetchStreams: false});
export { app, auth, db };
