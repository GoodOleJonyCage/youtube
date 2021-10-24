import { useState, useEffect } from 'react'
import { SignInGoogle } from './FirebaseService'
import './Comments.css'

export const Comments = (props) => {
     
    return props.loggedin ?
        <div className="comments">
            Comments Section !!! Coming soon !
        </div> :
        <button onClick={() => { SignInGoogle() }}>Login</button>

}