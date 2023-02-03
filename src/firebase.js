// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeU0uFP-tLqwIKnR2iuzKX6klOTKZmaSw",
  authDomain: "tiktok-clone-7fe70.firebaseapp.com",
  projectId: "tiktok-clone-7fe70",
  storageBucket: "tiktok-clone-7fe70.appspot.com",
  messagingSenderId: "668923023388",
  appId: "1:668923023388:web:a774a39460f29546470fd9",
  measurementId: "G-FYSTJKZ8JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);