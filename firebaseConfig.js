// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnaF-kQQKv4QSWwD5JCe1EUPMbMluLYLI",
  authDomain: "job-search-app-ef5dd.firebaseapp.com",
  projectId: "job-search-app-ef5dd",
  storageBucket: "job-search-app-ef5dd.appspot.com",
  messagingSenderId: "493550060745",
  appId: "1:493550060745:web:28f39ddd2070a087e5b918",
  measurementId: "G-VZ3V15TP6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
