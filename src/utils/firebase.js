// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0yv2MXgsJq0iLRrcfYJFjPXMQGrT0hzY",
  authDomain: "netflix-gpt-39cd3.firebaseapp.com",
  projectId: "netflix-gpt-39cd3",
  storageBucket: "netflix-gpt-39cd3.appspot.com",
  messagingSenderId: "556983845446",
  appId: "1:556983845446:web:3c62381a2a347dc3084047",
  measurementId: "G-ECDWX2REHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);