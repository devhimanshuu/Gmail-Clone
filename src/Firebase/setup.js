// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCne-nDCGlf3tA2S5O43Ws_bJ5uMJ-hFfo",
  authDomain: "clone-9fae3.firebaseapp.com",
  projectId: "clone-9fae3",
  storageBucket: "clone-9fae3.appspot.com",
  messagingSenderId: "969930186338",
  appId: "1:969930186338:web:30d6f17d8bab618af87b3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
