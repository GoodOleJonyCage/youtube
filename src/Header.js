import { Signedin } from './SignedIn';
import './Header.css'

export const Header = (props) => {

    return <div className="header">
        <div className="header-left">
            <span class="material-icons-outlined">menu</span>
            <a href="/">
                <img src="https://venturebeat.com/wp-content/uploads/2017/08/youtube_logo_old_new1.gif?fit=400%2C200&strip=all"></img>
            </a>
        </div>
        <div className="header-center">
            <input placeholder="Search" type="text"></input>
            <span class="material-icons-outlined search-icon">search</span>
            <span class="material-icons-outlined mike-icon">mic</span>
        </div>
        <div className="header-right">
            <span class="material-icons-outlined">videocam</span>
            <span class="material-icons-outlined">apps</span>
            <span class="material-icons-outlined">notifications</span>
            <Signedin {...props}/>
        </div>
    </div>;
}