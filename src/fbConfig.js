import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBx67sGRE3pAeUGr7lOLDQxCDtE_zP6fMs",
    authDomain: "drinkprime-16bc8.firebaseapp.com",
    databaseURL: "https://drinkprime-16bc8.firebaseio.com",
    projectId: "drinkprime-16bc8",
    storageBucket: "",
    messagingSenderId: "677852394055",
    appId: "1:677852394055:web:ef8f2584e17902ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


  export default firebase;