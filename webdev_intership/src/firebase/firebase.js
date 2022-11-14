// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCsrbg-z5YMjAi2p5-dUjY5wBAF0znvCjc",
  authDomain: "radicalx-webdev-internship.firebaseapp.com",
  projectId: "radicalx-webdev-internship",
  storageBucket: "radicalx-webdev-internship.appspot.com",
  messagingSenderId: "156090510876",
  appId: "1:156090510876:web:aa06eec5aa910f05b479d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);