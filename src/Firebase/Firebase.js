// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGGriTbNUJkne4_lOs9LsBEwbjW7EWZFc",
  authDomain: "limupa-dfa4f.firebaseapp.com",
  projectId: "limupa-dfa4f",
  storageBucket: "limupa-dfa4f.appspot.com",
  messagingSenderId: "295885634133",
  appId: "1:295885634133:web:5de4038810eb881541b2dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth ;