// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUDB3nnnEJqbBRQDzVGDkGhvDLLZlyAGU",
  authDomain: "netflixgpt-2ea89.firebaseapp.com",
  projectId: "netflixgpt-2ea89",
  storageBucket: "netflixgpt-2ea89.firebasestorage.app",
  messagingSenderId: "294906009154",
  appId: "1:294906009154:web:6e76a778250157039c3fdb",
  measurementId: "G-B8QLZJPEHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth()