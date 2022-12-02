// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6s_iHhZkIj5EQaJdTKkv-6g_sfLAGBj8",
  authDomain: "friday-night-9a240.firebaseapp.com",
  databaseURL: "https://friday-night-9a240.firebaseio.com",
  projectId: "friday-night-9a240",
  storageBucket: "friday-night-9a240.appspot.com",
  messagingSenderId: "109543428747",
  appId: "1:109543428747:web:63bca5105eb92272b5fa8e",
  measurementId: "G-TCWM9W4VWB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export const performance = isSupported().then(yes => yes ? getPerformance(app) : null);