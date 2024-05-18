// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "create-instagram-by-next-ea233.firebaseapp.com",
  projectId: "create-instagram-by-next-ea233",
  storageBucket: "create-instagram-by-next-ea233.appspot.com",
  messagingSenderId: "991966653655",
  appId: "1:991966653655:web:90aabd33ff5deeef0b9492"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);