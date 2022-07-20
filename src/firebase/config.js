// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEoyZqSvBzsSpnTbAB7q6lNHLlcHTl2Hg",
  authDomain: "portfolio-a7b71.firebaseapp.com",
  projectId: "portfolio-a7b71",
  storageBucket: "portfolio-a7b71.appspot.com",
  messagingSenderId: "935358326683",
  appId: "1:935358326683:web:7c9259f9d3eb0b9e59633e",
  measurementId: "G-7YX0GXS9QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);