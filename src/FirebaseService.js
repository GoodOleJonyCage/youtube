import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyApDwYPGL0THwlnBG58SURoRjegw1mCx94",
    authDomain: "whatsapp-f98bf.firebaseapp.com",
    projectId: "whatsapp-f98bf",
    storageBucket: "whatsapp-f98bf.appspot.com",
    messagingSenderId: "500011062804",
    appId: "1:500011062804:web:12621420c608687efc7901",
    measurementId: "G-D071M9NBN9"
});

const auth = firebase.auth();

export const SignInGoogle = (setloggedin) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        // .then(x => {setloggedin(IsSignedIn())});
}

export const SignedInUser = () => {
    return auth.currentUser;
}

export const IsSignedIn = () => {
    return auth.currentUser != null;
}

export const SignOut = () => {
    return auth.signOut();
}
