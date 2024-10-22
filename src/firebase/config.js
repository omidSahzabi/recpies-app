import { initializeApp } from 'firebase/app'
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBFnOHHH_MsFgG7MnrTXy2p1hrR0j7Ltsg",
    authDomain: "fullhousefood-97a12.firebaseapp.com",
    projectId: "fullhousefood-97a12",
    storageBucket: "fullhousefood-97a12.appspot.com",
    messagingSenderId: "659437536318",
    appId: "1:659437536318:web:ce144304e8abf93a84fd6f",
    measurementId: "G-1V8KK5RH10"
  };

// init firebase
  initializeApp(firebaseConfig)
  //init firestore
  const db = getFirestore()

  export {db}