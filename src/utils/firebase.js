// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDk6w8xzwpIVur5AZS5HZJci4QSXg26H2w",
    authDomain: "netflixgpt-d89c7.firebaseapp.com",
    projectId: "netflixgpt-d89c7",
    storageBucket: "netflixgpt-d89c7.firebasestorage.app",
    messagingSenderId: "925292611804",
    appId: "1:925292611804:web:26101f5d5fa88910240c19",
    measurementId: "G-K3BJBL1EHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
