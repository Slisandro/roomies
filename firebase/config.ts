import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9lSfxOv2-svdcwpufLl5uyStpdnCmGvs",
  authDomain: "roomies-2096e.firebaseapp.com",
  projectId: "roomies-2096e",
  storageBucket: "roomies-2096e.appspot.com",
  messagingSenderId: "352532096664",
  appId: "1:352532096664:web:1add5f4ee64584240cd2ed",
  measurementId: "G-0VS270HVQS"
}

export const app = initializeApp(firebaseConfig);