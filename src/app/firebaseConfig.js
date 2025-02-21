// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_VAbYYfGpxnHZlyXgqYGT_nA0EXDPZJU",
  authDomain: "vaidya-vrinda.firebaseapp.com",
  projectId: "vaidya-vrinda",
  storageBucket: "vaidya-vrinda.firebasestorage.app",
  messagingSenderId: "493618800530",
  appId: "1:493618800530:web:5e2d796bfc42f42ab2c34b",
  measurementId: "G-W4R3958KXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth=getAuth(app);

export {auth};