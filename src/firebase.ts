// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7scMeK80YgzOm7patwg9bkdj2qc1YOoE",
  authDomain: "recipe-app-7d018.firebaseapp.com",
  projectId: "recipe-app-7d018",
  storageBucket: "recipe-app-7d018.appspot.com",
  messagingSenderId: "959827809161",
  appId: "1:959827809161:web:5770b5aa18113dbde5c758",
  measurementId: "G-BX039KK8FD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
