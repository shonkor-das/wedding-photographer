// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.evv.REACT_APP_apiKey,
  authDomain: process.evv.REACT_APP_authDomain,
  projectId: process.evv.REACT_APP_projectId,
  storageBucket: process.evv.REACT_APP_storageBucket,
  messagingSenderId: process.evv.REACT_APP_messagingSenderId,
  appId: process.evv.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;