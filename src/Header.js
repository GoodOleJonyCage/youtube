import './Header.css'

export const Header = () => {

    return <div className="header">
        <div className="header-left">
            <span class="material-icons">menu</span>
            <img src="https://es.logodownload.org/wp-content/uploads/2018/09/youtube-logo-81-1024x228.png"></img>
        </div>
        <div className="header-center">
            <input placeholder="Search" type="text"></input>
            <span class="material-icons search-icon">search</span>
            <span class="material-icons mike-icon">mic</span>
        </div>
        <div className="header-right">
            <span class="material-icons">videocam</span>
            <span class="material-icons">apps</span>
            <span class="material-icons">notifications</span>
            <span class="material-icons">logo_dev</span>
        </div>
    </div>;
}