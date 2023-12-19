// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myestate-aa587.firebaseapp.com",
  projectId: "myestate-aa587",
  storageBucket: "myestate-aa587.appspot.com",
  messagingSenderId: "542215161053",
  appId: "1:542215161053:web:c0a9f8d3fa4dc4f79e4734"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);