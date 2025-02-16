// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaM6jdK4BPPX0uOIGNckmsYZRfr7GChb4",
  authDomain: "netflixgpt-c0a8b.firebaseapp.com",
  projectId: "netflixgpt-c0a8b",
  storageBucket: "netflixgpt-c0a8b.firebasestorage.app",
  messagingSenderId: "926349623216",
  appId: "1:926349623216:web:9af5b7e872cb39fcaba075",
  measurementId: "G-XMZJBKKQD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
