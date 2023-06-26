// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDREB2urecWZVQv6aa1cbsIqpXhHglnBP4",
  authDomain: "chat-23907.firebaseapp.com",
  projectId: "chat-23907",
  storageBucket: "chat-23907.appspot.com",
  messagingSenderId: "643171064060",
  appId: "1:643171064060:web:ac255fbbba889bfc08df79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)