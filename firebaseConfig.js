// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBEg6IdgHe0twGSeiLrgxr7-dZgl9syd6s",
  authDomain: "car-pooling-f642e.firebaseapp.com",
  databaseURL: "https://car-pooling-f642e-default-rtdb.firebaseio.com",
  projectId: "car-pooling-f642e",
  storageBucket: "car-pooling-f642e.firebasestorage.app",
  messagingSenderId: "208164505310",
  appId: "1:208164505310:web:f0b8b02e4ea85fe193a44f",
  measurementId: "G-2SSBH60E6X"
};


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const database = getDatabase(app);
