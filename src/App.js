import { IsSignedIn, SignOut, SignInGoogle,SignedInUser } from './FirebaseService'
import { useState, useEffect } from 'react'
import firebase from "firebase/app";
import logo from './logo.svg';
import { Header } from './Header'
import { Body } from './Body'
import './App.css';

function App() {

  const [searchterm, setsearchterm] = useState('');
  const [loggedin, setloggedin] = useState(false);
  
  firebase.auth().onAuthStateChanged((user, context) => {
    setloggedin(IsSignedIn());
  });

  return (
    <div className="App">
      <Header setsearchterm={setsearchterm} SignedInUser={SignedInUser} SignOut={SignOut} SignInGoogle={SignInGoogle} loggedin={loggedin} />
      <Body searchterm={searchterm}  SignedInUser={SignedInUser} SignOut={SignOut} SignInGoogle={SignInGoogle} loggedin={loggedin} />
    </div>
  );
}

export default App;
