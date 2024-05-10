// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database"
import "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEXoyJrPFgUjOmLDITqaw9Lb9cWMR5LUQ",
  authDomain: "estufaapp-ba21a.firebaseapp.com",
  projectId: "estufaapp-ba21a",
  storageBucket: "estufaapp-ba21a.appspot.com",
  messagingSenderId: "564915374293",
  appId: "1:564915374293:web:8f966e2c68a1f0649cba5c",
  measurementId: "G-47VL35DK4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

export { db, ref, onValue };