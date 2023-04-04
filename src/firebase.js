// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFEkQi3U3574ktKMNPpmAHZ9QqPHQtLnQ",
    authDomain: "school-life-f6bf8.firebaseapp.com",
    projectId: "school-life-f6bf8",
    storageBucket: "school-life-f6bf8.appspot.com",
    messagingSenderId: "751702264411",
    appId: "1:751702264411:web:bbb50cc6153d8dbbe68d7e",
    measurementId: "G-XBQPSH10C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

