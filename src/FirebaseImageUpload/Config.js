// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1YGZl3IrW-GPoxlGQ5CdrIJYsARMgwqI",
    authDomain: "micronicadb-79e46.firebaseapp.com",
    projectId: "micronicadb-79e46",
    storageBucket: "micronicadb-79e46.appspot.com",
    messagingSenderId: "130374474253",
    appId: "1:130374474253:web:b99b3c480e089402421344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);