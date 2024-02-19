// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "main-blog-e4a52.firebaseapp.com",
  projectId: "main-blog-e4a52",
  storageBucket: "main-blog-e4a52.appspot.com",
  messagingSenderId: "93926929579",
  appId: "1:93926929579:web:f93a76af42df53457173ee",
  measurementId: "G-RXTYWSW7EY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
