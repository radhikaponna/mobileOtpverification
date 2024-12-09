// src/firebase.js

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5woe-eE03HmN4s7Z5qXq1Jt3LP7sGMN4",
  authDomain: "fir-sdk-login.firebaseapp.com",
  projectId: "fir-sdk-login",
  storageBucket: "fir-sdk-login.firebasestorage.app",
  messagingSenderId: "856275922679",
  appId: "1:856275922679:web:2c39a7b8f1b8be3323edf2",
  measurementId: "G-HGHQE5B8LN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export {
  auth,
  db,
  googleProvider,
  facebookProvider,
  githubProvider,
  twitterProvider,
};
