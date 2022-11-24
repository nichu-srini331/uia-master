// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import{getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwj9GU7_CZoQpuV4E1g-BCAnRo5g9rjXQ",
  authDomain: "fir-final-89808.firebaseapp.com",
  projectId: "fir-final-89808",
  storageBucket: "fir-final-89808.appspot.com",
  messagingSenderId: "1047226128310",
  appId: "1:1047226128310:web:750c910a15ef1b43211317",
  measurementId: "G-M22LDJHNBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);