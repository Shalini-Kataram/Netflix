// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcjSYRxUL0u748AeHeMszf1ElLbny32ic",
    authDomain: "netflix-gpt-14c23.firebaseapp.com",
    projectId: "netflix-gpt-14c23",
    storageBucket: "netflix-gpt-14c23.firebasestorage.app",
    messagingSenderId: "824938900438",
    appId: "1:824938900438:web:67cf31060312a297c61277",
    measurementId: "G-15QK23SVHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
