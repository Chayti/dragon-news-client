// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG8O_IrGGHSGKl_dQ5e4NteZSR0Xowda0",
  authDomain: "simple-firebase-auth-578e0.firebaseapp.com",
  projectId: "simple-firebase-auth-578e0",
  storageBucket: "simple-firebase-auth-578e0.appspot.com",
  messagingSenderId: "431308382026",
  appId: "1:431308382026:web:0b9d7ab2d1ad157f2e6bb3",
  measurementId: "G-EZSTX5W2BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;