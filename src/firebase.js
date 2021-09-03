// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpdn0xGnSSiDY0-Xx6bSMuUgXTa1USRlc",
  authDomain: "facebook-clone-17b35.firebaseapp.com",
  projectId: "facebook-clone-17b35",
  storageBucket: "facebook-clone-17b35.appspot.com",
  messagingSenderId: "764943594875",
  appId: "1:764943594875:web:855c381be35435c32479de",
  measurementId: "G-VYGNR04B1Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// for google login service
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
