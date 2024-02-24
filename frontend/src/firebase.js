import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1WpIeobz25TeE-7IuwWcjRMlvw4aLye0",
  authDomain: "spit-5b840.firebaseapp.com",
  projectId: "spit-5b840",
  storageBucket: "spit-5b840.appspot.com",
  messagingSenderId: "184530031182",
  appId: "1:184530031182:web:0d0d1bf3572d82043a691f",
  measurementId: "G-84YP38CPNG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Example of creating a document reference
export const docRef = doc(db, "Donors", "JGkW3XM2n3k8EC0xBZMw"); // Replace with your actual document path

export const auth = getAuth(app);
export default app;
