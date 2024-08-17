// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALuLyofp11ghDv6-J0PWCqBq9Y9O7OAFs",
  authDomain: "netflix-c053e.firebaseapp.com",
  projectId: "netflix-c053e",
  storageBucket: "netflix-c053e.appspot.com",
  messagingSenderId: "1052738727551",
  appId: "1:1052738727551:web:3a9830fbc188c726cb194a",
  measurementId: "G-YWX6MS4NE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();