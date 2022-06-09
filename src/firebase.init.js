// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbFEjSXJVkxoDj-4LYCCtgaXim3BN0c5Q",
  authDomain: "portfolio-c07a0.firebaseapp.com",
  projectId: "portfolio-c07a0",
  storageBucket: "portfolio-c07a0.appspot.com",
  messagingSenderId: "807127594834",
  appId: "1:807127594834:web:903330eb5b4fe43e242c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;