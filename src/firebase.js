// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ7xQrH9XMRJel7FyiJjiKX-BNB952lIA",
  authDomain: "wd-auth-dev.firebaseapp.com",
  projectId: "wd-auth-dev",
  storageBucket: "wd-auth-dev.appspot.com",
  messagingSenderId: "351662232787",
  appId: "1:351662232787:web:3b680937611df94ac47026",
  measurementId: "G-G6LLD9JSQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
// const analytics = getAnalytics(app);
