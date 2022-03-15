// const firebase = require("firebase");
// Required for side-effects
// Initialize Cloud Firestore through Firebase
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHXEu0TuVcSGfpUhQQkpcrBlbnZucW_Fs",
    authDomain: "to-do-list-872e9.firebaseapp.com",
    projectId: "to-do-list-872e9",
    storageBucket: "to-do-list-872e9.appspot.com",
    messagingSenderId: "547779550596",
    appId: "1:547779550596:web:0f037466bc39ae2b6111d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();