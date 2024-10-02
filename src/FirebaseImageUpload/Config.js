// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyCyqZYN92ABVKzGXC6Ppd9jPWVyYCzO0",
    authDomain: "micronicadb.firebaseapp.com",
    projectId: "micronicadb",
    storageBucket: "micronicadb.appspot.com",
    messagingSenderId: "930547759251",
    appId: "1:930547759251:web:451922a3eedc3e44467566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);