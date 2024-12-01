// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxIA2U2sZk2ODHdXQbfZaUjUk3RJ6P2c0",
  authDomain: "research-publication-49e82.firebaseapp.com",
  projectId: "research-publication-49e82",
  storageBucket: "research-publication-49e82.firebasestorage.app",
  messagingSenderId: "1034794914511",
  appId: "1:1034794914511:web:484ba3afd450ef354c1dba",
  measurementId: "G-HQ9K914PT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);