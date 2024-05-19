// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/database"
import { getDatabase, ref, onValue } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnHui3STYO7nxA4TVdxebB_ESQLAcS0Xc",
  authDomain: "projetoesp32-eea31.firebaseapp.com",
  databaseURL: "https://projetoesp32-eea31-default-rtdb.firebaseio.com",
  projectId: "projetoesp32-eea31",
  storageBucket: "projetoesp32-eea31.appspot.com",
  messagingSenderId: "528204951146",
  appId: "1:528204951146:web:db30d813ce1e25f7e8a413",
  measurementId: "G-6TXXDZM4ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();


export {ref, db, onValue};