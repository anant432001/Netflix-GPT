// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVvTTysG5bkNU0RsgoLMzWRwH0yfCSyeo",
  authDomain: "netflixgpt-2c515.firebaseapp.com",
  projectId: "netflixgpt-2c515",
  storageBucket: "netflixgpt-2c515.appspot.com",
  messagingSenderId: "239468586780",
  appId: "1:239468586780:web:3d0d1f1571b91b6e983cd9",
  measurementId: "G-CC66BM5W3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();