// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKK9TMGd72jK4rQRZr3cg5ASKm2k954qY",
  authDomain: "questionnaire-27924.firebaseapp.com",
  projectId: "questionnaire-27924",
  storageBucket: "questionnaire-27924.appspot.com",
  messagingSenderId: "489957100483",
  appId: "1:489957100483:web:9361bed53dd39f274ccb76",
  measurementId: "G-XC3YLPQC99",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
