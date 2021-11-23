// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4J4o3p5URVJ-lURqH5SzkvdU9IElgJl4",
  authDomain: "srsp-pwa.firebaseapp.com",
  projectId: "srsp-pwa",
  storageBucket: "srsp-pwa.appspot.com",
  messagingSenderId: "490713355060",
  appId: "1:490713355060:web:faf97c58321bd6f652cb61",
  measurementId: "G-LZBFGHKF44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);