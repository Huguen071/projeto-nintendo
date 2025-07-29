// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAJnMTJCBFyYznlq7u9Qpy4emSuR1vT7hg",
  authDomain: "projeto-nintendo.firebaseapp.com",
  projectId: "projeto-nintendo",
  storageBucket: "projeto-nintendo.firebasestorage.app",
  messagingSenderId: "854790139137",
  appId: "1:854790139137:web:91a22222dafb28a7987f00",
  measurementId: "G-09SH2GV59G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);