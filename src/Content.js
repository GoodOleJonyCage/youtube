import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { SignedInUser, IsSignedIn } from './FirebaseService'
import firebase from "firebase/app";
import { ItemList } from './ItemList';
import { Detail } from './Detail';
import './Content.css'

export const Content = (props) => {

    return <div className="content">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={(p) => <ItemList {...props} />} ></Route>
                <Route path="/detail"
                    // render={(p) => <Detail   {...props} />}
                    render={({ location }) => <Detail to={{ pathname: "detail", state: location.state }} />}
                ></Route>
            </Switch>
        </BrowserRouter>
    </div>;
}