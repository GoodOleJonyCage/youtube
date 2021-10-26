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


export const getComments = (setcomments) => {
    
    let comments = [];
    const db = firebase.firestore();
    db.collection("comments").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            comments.push({
                docid: doc.id,
                text: doc.data().text
            });
        });
        setcomments(comments);
    });
    
}

export const addComment = (text ) => {
    
    if (text.length == 0) {
        return;
    }
    const db = firebase.firestore();
    db.collection("comments").add({
        // : "/collection/document001"
        //parentid: db.doc('comments/documentG98aGlqhgSsKf1VEFYGV'),
        //postid:1,
        parentid: '',
        text:text,
        //user: "rats@yahoo.com"
    });
}

export const addReplyComment = (docid, text ) => {
    
    if (text.length == 0) {
        return;
    }
    const db = firebase.firestore();
    db.collection("comments").add({
        // : "/collection/document001"
        //parentid: db.doc('comments/documentG98aGlqhgSsKf1VEFYGV'),
        //postid:1,
        parentid: docid,
        text:text,
        //user: "rats@yahoo.com"
    });
}