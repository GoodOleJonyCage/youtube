import {useRef} from 'react';
import { Signedin } from './SignedIn';
import './Header.css'

export const Header = (props) => {
    
    const refSearchBox = useRef('');

    return <div className="header">
        <div className="header-left">
            <span className="material-icons-outlined">menu</span>
            <a href="/">
                <img src="https://venturebeat.com/wp-content/uploads/2017/08/youtube_logo_old_new1.gif?fit=400%2C200&strip=all"></img>
            </a>
        </div>
        <div className="header-center">
            <input 
                ref={refSearchBox}
                placeholder="Search" type="text"></input>
            <span 
                onClick={()=>{props.setsearchterm(refSearchBox.current.value);refSearchBox.current.value="";}}
                className="material-icons-outlined search-icon">search</span>
            <span className="material-icons-outlined mike-icon">mic</span>
        </div>
        <div className="header-right">
            <span className="material-icons-outlined">videocam</span>
            <span className="material-icons-outlined">apps</span>
            <span className="material-icons-outlined">notifications</span>
            <Signedin {...props}/>
        </div>
    </div>;
}

