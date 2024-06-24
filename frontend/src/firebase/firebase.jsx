// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD4C_uhvUl03OflZ7KI6GSbbMJH1Qhv00",
  authDomain: "discord-4f487.firebaseapp.com",
  projectId: "discord-4f487",
  storageBucket: "discord-4f487.appspot.com",
  messagingSenderId: "801377990257",
  appId: "1:801377990257:web:cb31cb710f4a94adb94dd0",
  measurementId: "G-X4WWT9W3TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;