// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDeU0uFP-tLqwIKnR2iuzKX6klOTKZmaSw",
  authDomain: "tiktok-clone-7fe70.firebaseapp.com",
  projectId: "tiktok-clone-7fe70",
  storageBucket: "tiktok-clone-7fe70.appspot.com",
  messagingSenderId: "668923023388",
  appId: "1:668923023388:web:a774a39460f29546470fd9",
  measurementId: "G-FYSTJKZ8JC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db