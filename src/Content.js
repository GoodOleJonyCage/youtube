import react from 'react'
import { BrowserRouter, Route, Switch,NavLink } from 'react-router-dom';
import { ItemList } from './ItemList';
import { Detail } from './Detail';
import './Content.css'

export const Content = () => {

    return <div className="content">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ItemList}></Route>
                    <Route path="/detail" component={Detail}></Route>
                </Switch>
            </BrowserRouter>
        </div>;
}