// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCREXUwpDWNhgciWWNBwQazDUO68lY1ovI",
  authDomain: "pratice-2-hackzone.firebaseapp.com",
  projectId: "pratice-2-hackzone",
  storageBucket: "pratice-2-hackzone.firebasestorage.app",
  messagingSenderId: "329141558439",
  appId: "1:329141558439:web:cdc959c0fb8a65d3b7cf82",
  measurementId: "G-6QZGG5KH3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export {analytics,auth,db}