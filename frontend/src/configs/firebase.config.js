import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEqIxhNxFToWaOhx_50XSdB_9I_331xJo",
  authDomain: "ocop-3b571.firebaseapp.com",
  projectId: "ocop-3b571",
  storageBucket: "ocop-3b571.appspot.com",
  messagingSenderId: "586645112022",
  appId: "1:586645112022:web:e76ab2af760e50b0157577",
};

const app = initializeApp(firebaseConfig);

export default app;

export const firestore = getFirestore(app);

export const auth = getAuth(app);
