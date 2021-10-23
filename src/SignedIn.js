import { useState, useEffect } from 'react'
import { IsSignedIn, SignedInUser } from './FirebaseService'
import ReactTooltip from "react-tooltip";

export const Signedin = (props) => {

    // const [loaded, setloaded] = useState(false);
    // useEffect(() => {
    //     setloaded(true) ;    
    // }, [])

    return (
        props.loggedin ?
            <div>
                <span data-tip data-for="user-account-tip" onClick={() => { props.SignOut() }} className="material-icons-outlined">person</span>
                <ReactTooltip id="user-account-tip" place="top" effect="solid">
                    {props.SignedInUser()?.email}
                </ReactTooltip>
            </div> :
            <div>
                <span data-tip data-for="user-account-tip" onClick={() => { props.SignInGoogle() }} className="material-icons-outlined">person_off</span>
                <ReactTooltip id="user-account-tip" place="top" effect="solid">
                    Login
                </ReactTooltip>
            </div>
    );
}