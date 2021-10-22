import './Header.css'

export const Header = () => {

    return <div className="header">
        <div className="header-left">
            <span class="material-icons-outlined">menu</span>
            <img src="https://logosmarcas.net/wp-content/uploads/2020/04/YouTube-Logo.png"></img>
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
            <span class="material-icons-outlined">logo_dev</span>
        </div>
    </div>;
}