// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAv89eo9r2i7G-R27cP7ZrVb6n1ekBGH6Q",
    authDomain: "netflixgpt-3df17.firebaseapp.com",
    projectId: "netflixgpt-3df17",
    storageBucket: "netflixgpt-3df17.firebasestorage.app",
    messagingSenderId: "716655626441",
    appId: "1:716655626441:web:5a7f46742dd2177db66518",
    measurementId: "G-9JHTX90FQB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
