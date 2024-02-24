// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO2P5DJBhFOqmD3ba5QzyIuclGf24ypK8",
  authDomain: "synergy-35091.firebaseapp.com",
  projectId: "synergy-35091",
  storageBucket: "synergy-35091.appspot.com",
  messagingSenderId: "120925986035",
  appId: "1:120925986035:web:04ced91bbeebdd0f9ceb86",
  measurementId: "G-HY022KRC96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
