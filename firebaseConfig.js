import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeFirestore} from "firebase/firestore";

const firebaseConfig = {

  ,

  ,

  ,

  ,

  ,

  ,

  

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = initializeFirestore(app, {useFetchStreams: false});
export { app, auth, db };
