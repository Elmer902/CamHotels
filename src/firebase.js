// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_YKLolOm9fDRWsO-0G2XjUASzadgz0lo",
  authDomain: "fast-cart-49d93.firebaseapp.com",
  projectId: "fast-cart-49d93",
  storageBucket: "fast-cart-49d93.firebasestorage.app",
  messagingSenderId: "570905179415",
  appId: "1:570905179415:web:e3e607d84d24db1dbf7352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);