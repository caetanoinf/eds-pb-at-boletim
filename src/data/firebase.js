import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_OBpqrxGeqes6yxfBijLnAujRmGzkHlA",
  authDomain: "at-projeto-bloco.firebaseapp.com",
  projectId: "at-projeto-bloco",
  storageBucket: "at-projeto-bloco.appspot.com",
  messagingSenderId: "782574836938",
  appId: "1:782574836938:web:1fcea97b76dcc49054e833",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
