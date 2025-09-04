import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCFJEUNO7b2xFgcvTHlJF076LRH8HBSulk",
  authDomain: "property-delaler.firebaseapp.com",
  databaseURL: "https://property-delaler-default-rtdb.firebaseio.com",
  projectId: "property-delaler",
  storageBucket: "property-delaler.firebasestorage.app",
  messagingSenderId: "497117303974",
  appId: "1:497117303974:web:b583e8a4ae5a79c2c5d067",
  measurementId: "G-WGZXKVYY2L"
};

const app = initializeApp(firebaseConfig);

// Export database instance
export const db = getDatabase(app);