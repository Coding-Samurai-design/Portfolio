// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjNRkZKT26p7lwLvNxLBVpTCJRi6_Fzjo",
  authDomain: "portfolio-cf0d3.firebaseapp.com",
  projectId: "portfolio-cf0d3",
  storageBucket: "portfolio-cf0d3.appspot.com",
  messagingSenderId: "295090037922",
  appId: "1:295090037922:web:b878a92fd9cceda0a663fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication
export const auth = getAuth(app);
export { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider };
