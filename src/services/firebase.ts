import firebase from "firebase/compat/app"

import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyDc4ik22-5BEjlX16ixveaN7h69Ow-20LE",
  authDomain: "letmeask-b57ad.firebaseapp.com",
  databaseURL: "https://letmeask-b57ad-default-rtdb.firebaseio.com",
  projectId: "letmeask-b57ad",
  storageBucket: "letmeask-b57ad.appspot.com",
  messagingSenderId: "9349160992",
  appId: "1:9349160992:web:34147bb9e62bba092fdc45"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }