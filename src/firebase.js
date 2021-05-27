import firebase from "firebase";

// give the firebase config object here
// u can also use other sign-in methods like google and facebook
// for that just use auth.signInWithPopUp

const firebaseConfig = {
  apiKey: "AIzaSyC_Ntb63mmkmt68qyu3voqxMTFHYYViqf4",
  authDomain: "disneyplus-clone-ab2e1.firebaseapp.com",
  projectId: "disneyplus-clone-ab2e1",
  storageBucket: "disneyplus-clone-ab2e1.appspot.com",
  messagingSenderId: "1044620405610",
  appId: "1:1044620405610:web:67516912bd989a39f6d313",
  measurementId: "G-P2TSLY3EZQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
