// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJs1sYtOoiL8X1bKQCnL8XsEt-0vEqoI0",
    authDomain: "product-app-92d84.firebaseapp.com",
    projectId: "product-app-92d84",
    storageBucket: "product-app-92d84.appspot.com",
    messagingSenderId: "991363765117",
    appId: "1:991363765117:web:8cbc9f1fcd87c3382b7214",
    measurementId: "G-GQJ18NC7L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {db,auth,}