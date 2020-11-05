import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD02qqz9R3kJGwUs66tt9EITyw-razW9wM",
    authDomain: "crwn-db-9af62.firebaseapp.com",
    databaseURL: "https://crwn-db-9af62.firebaseio.com",
    projectId: "crwn-db-9af62",
    storageBucket: "crwn-db-9af62.appspot.com",
    messagingSenderId: "718548867207",
    appId: "1:718548867207:web:25658b5d935fdde61a8022",
    measurementId: "G-BH83YWPFRM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;