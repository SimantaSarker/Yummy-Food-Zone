// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6WZCue6i9QezNViv5qQOZXvVMY3iqH-c",
  authDomain: "assignment-10-yummy-food.firebaseapp.com",
  projectId: "assignment-10-yummy-food",
  storageBucket: "assignment-10-yummy-food.appspot.com",
  messagingSenderId: "1011885662042",
  appId: "1:1011885662042:web:faa925d82504a13dfd9d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;