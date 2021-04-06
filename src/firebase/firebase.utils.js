import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnm_P0dPQ-XANAEbe7zwDfuMq2fYk8EcE",
  authDomain: "crwn-clothing-db-b1937.firebaseapp.com",
  projectId: "crwn-clothing-db-b1937",
  storageBucket: "crwn-clothing-db-b1937.appspot.com",
  messagingSenderId: "551273295319",
  appId: "1:551273295319:web:e2d1b74233a6a60a2daf92",
  measurementId: "G-KCCHEENRWP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
