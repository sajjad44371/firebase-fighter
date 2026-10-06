// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaJgB-QsM-OUrj_DPDHVHjF9zxcpnKp5Q",
  authDomain: "fir-fighter-3ddda.firebaseapp.com",
  projectId: "fir-fighter-3ddda",
  storageBucket: "fir-fighter-3ddda.firebasestorage.app",
  messagingSenderId: "631468977198",
  appId: "1:631468977198:web:957868a183d165d64f43bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
