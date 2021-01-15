import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA7gvyNRTwZvNQRGsly6snhpowPSURp-NY",
    authDomain: "snapchat-clone-42335.firebaseapp.com",
    projectId: "snapchat-clone-42335",
    storageBucket: "snapchat-clone-42335.appspot.com",
    messagingSenderId: "899109503492",
    appId: "1:899109503492:web:bc9dac46bc13366de8eb51"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage, provider};