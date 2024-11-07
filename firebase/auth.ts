import { getReactNativePersistence, initializeAuth, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

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

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default auth;