import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDiysAD5WabfHYhFQPbuvBrWdUZBQ1bWVM",
    authDomain: "crwn-db-b0c98.firebaseapp.com",
    databaseURL: "https://crwn-db-b0c98.firebaseio.com",
    projectId: "crwn-db-b0c98",
    storageBucket: "crwn-db-b0c98.appspot.com",
    messagingSenderId: "542090237131",
    appId: "1:542090237131:web:0f83c900388547bc3f774e",
    measurementId: "G-1R6HVZKBF3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;