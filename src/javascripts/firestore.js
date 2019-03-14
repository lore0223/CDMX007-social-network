// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import { initializeApp, firestore } from "firebase";
// Required for side-effects
// import 'firebase/firestore';
// import { firebase } from '@firebase/app';
// import '@firebase/firestore'
// const initializeApp = ({
//   apiKey: 'AIzaSyDricH8xG2qh-uO35M9_Q5F4SvssT6MiUg',
//   authDomain: 'tejiendo-en-azul.firebaseapp.com',
//   projectId: 'tejiendo-en-azul'
// });

// Initialize Cloud Firestore through Firebase
import firebase from 'firebase';
import 'firebase/firestore';
const db = firestore();
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.error("Error adding document: ", error);
  });

