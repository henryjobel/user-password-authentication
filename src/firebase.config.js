// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrW24uIRqY3zpr_xr4mf81AVBKgUUI7M",
  authDomain: "user-email-password-auth-12ce5.firebaseapp.com",
  projectId: "user-email-password-auth-12ce5",
  storageBucket: "user-email-password-auth-12ce5.appspot.com",
  messagingSenderId: "869384148312",
  appId: "1:869384148312:web:75f7c8a31d1669d5efc12d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth)