// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpwT0ObqQKokMiM12nSW3JcJc_bXsFcPw",
    authDomain: "learning-cse.firebaseapp.com",
    projectId: "learning-cse",
    storageBucket: "learning-cse.appspot.com",
    messagingSenderId: "1029422942824",
    appId: "1:1029422942824:web:e080e272fbb05e9accc9dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;