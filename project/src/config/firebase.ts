import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDrNfs9xB3ovwDX-1OWuwOCXjfn0n1ZCMc",
  authDomain: "liner-c5405.firebaseapp.com",
  projectId: "liner-c5405",
  storageBucket: "liner-c5405.firebasestorage.app",
  messagingSenderId: "603927435623",
  appId: "1:603927435623:web:57f76d7894f838883df7c2",
  measurementId: "G-DTKDW76LJW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);