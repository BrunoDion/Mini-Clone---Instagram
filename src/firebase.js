// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/functions';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbRJdhfuvzrp88AiyIftoyS43RQqVFJ-I",
    authDomain: "instagram-clone-curso-60535.firebaseapp.com",
    projectId: "instagram-clone-curso-60535",
    storageBucket: "instagram-clone-curso-60535.appspot.com",
    messagingSenderId: "84150951380",
    appId: "1:84150951380:web:5208e66f55c407618c4a41",
    measurementId: "G-Q91KX06M3C"
    });

// Initialize Firebase


/*const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();*/

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();


export {db, auth, storage, functions};