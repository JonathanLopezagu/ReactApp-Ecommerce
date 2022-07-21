// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB443-bLm3BoIiKt9Dubq4V8OjTuLu0w8M",
  authDomain: "ecommerce-coderjmla.firebaseapp.com",
  projectId: "ecommerce-coderjmla",
  storageBucket: "ecommerce-coderjmla.appspot.com",
  messagingSenderId: "250854521616",
  appId: "1:250854521616:web:691db397b661823b790395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// funcion para exportar el app

export default function iniFirebase(){
    return app
}