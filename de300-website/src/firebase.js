// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdrCX5xc3Gld02ZYs6w7Dc52OoXHuec8I",
  authDomain: "de300-website.firebaseapp.com",
  projectId: "de300-website",
  storageBucket: "de300-website.appspot.com",
  messagingSenderId: "1763697748",
  appId: "1:1763697748:web:6a15ee39692c1f5f2339c1",
  measurementId: "G-4N5E272JL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
