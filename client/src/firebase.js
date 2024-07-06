// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9f02a.firebaseapp.com",
  projectId: "mern-blog-9f02a",
  storageBucket: "mern-blog-9f02a.appspot.com",
  messagingSenderId: "714099855154",
  appId: "1:714099855154:web:00730b7471eec0730f912b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

