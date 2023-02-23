import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_StiTUul7bminnkDEEPC1uPDh-DG3xKA",
  authDomain: "react-chat-0808.firebaseapp.com",
  projectId: "react-chat-0808",
  storageBucket: "react-chat-0808.appspot.com",
  messagingSenderId: "948262255300",
  appId: "1:948262255300:web:1ecf345d43eeefe0f3e791",
  measurementId: "G-E0ZKF881QB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
