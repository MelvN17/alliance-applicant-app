// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, getStream} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVsT1PhfSyDRlxByGkYSYgDw0GwncWCg4",
    authDomain: "alliancesoftwareg7-18958.firebaseapp.com",
    projectId: "alliancesoftwareg7-18958",
    storageBucket: "alliancesoftwareg7-18958.appspot.com",
    messagingSenderId: "255294297535",
    appId: "1:255294297535:web:4f76bb6f0e6bbe5ad07d0a",
    measurementId: "G-MGGL4K6JNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);