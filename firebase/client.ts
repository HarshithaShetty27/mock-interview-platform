
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD8E9MeRsp6hnxEmzdpNsf_jFEtfKNloCg",
    authDomain: "prepwise-7a576.firebaseapp.com",
    projectId: "prepwise-7a576",
    storageBucket: "prepwise-7a576.firebasestorage.app",
    messagingSenderId: "769445633759",
    appId: "1:769445633759:web:3ca21cffd9171f2b53936a",
    measurementId: "G-CD0DL7W8FM"
};

// Initialize Firebase
const app = !getApps.length?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);