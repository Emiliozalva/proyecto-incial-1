// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkf9S5YDRk8e_6WkWBT_060jLwgnNByuY",
  authDomain: "proyecto-inicial-1-b4a2a.firebaseapp.com",
  projectId: "proyecto-inicial-1-b4a2a",
  storageBucket: "proyecto-inicial-1-b4a2a.firebasestorage.app",
  messagingSenderId: "899853389966",
  appId: "1:899853389966:web:69fa333d9d5245cc64b9df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);