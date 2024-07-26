// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCySYSjkaf2C1tWImmdlbLtvZn_6k_wkY8",
  authDomain: "clone-cd47b.firebaseapp.com",
  projectId: "clone-cd47b",
  storageBucket: "clone-cd47b.appspot.com",
  messagingSenderId: "1015231562995",
  appId: "1:1015231562995:web:6be662647762fbee652386",
  measurementId: "G-1F3Q9985LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()