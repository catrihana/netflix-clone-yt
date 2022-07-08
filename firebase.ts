// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_9h0EHbs9Jx6aRjWDwRqTPmZ1x7I-DUw",
  authDomain: "netflix-clone-yt-77053.firebaseapp.com",
  projectId: "netflix-clone-yt-77053",
  storageBucket: "netflix-clone-yt-77053.appspot.com",
  messagingSenderId: "941452956733",
  appId: "1:941452956733:web:bcaa4af3dae145666d4654",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export {auth, db};
