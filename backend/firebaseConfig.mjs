// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1WpIeobz25TeE-7IuwWcjRMlvw4aLye0",
  authDomain: "spit-5b840.firebaseapp.com",
  projectId: "spit-5b840",
  storageBucket: "spit-5b840.appspot.com",
  messagingSenderId: "184530031182",
  appId: "1:184530031182:web:0d0d1bf3572d82043a691f",
  measurementId: "G-84YP38CPNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);