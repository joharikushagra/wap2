import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoiMCd8tTZMrVW565-_f7q8qW7HGsBuUw",
  authDomain: "whatsapp-clone-84df5.firebaseapp.com",
  projectId: "whatsapp-clone-84df5",
  storageBucket: "whatsapp-clone-84df5.appspot.com",
  messagingSenderId: "1091305251793",
  appId: "1:1091305251793:web:632141d28bca8c8b61f6f0",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
