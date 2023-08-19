// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7oqvZYrxnujKFGTC_smHxgOlK_GcbzrQ",
  authDomain: "wildlife-campanion.firebaseapp.com",
  projectId: "wildlife-campanion",
  storageBucket: "wildlife-campanion.appspot.com",
  messagingSenderId: "456938194096",
  appId: "1:456938194096:web:f00b689726b858c1312775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);