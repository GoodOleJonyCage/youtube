import './Sidebar.css'

export const Sidebar = () => {

    return <div className="sidebar">
        <div>
            <span className="material-icons-outlined">home</span>
            <label><a href="/">Home</a></label>
        </div>
        <div>
            <span className="material-icons-outlined">explore</span>
            <label>Explore</label>
        </div>
        <div>
            <span className="material-icons-outlined">subscriptions</span>
            <label>Subscriptions</label>
        </div>
        <div className="separator"></div>
        <div>
            <span className="material-icons-outlined">video_library</span>
            <label>Library</label>
        </div>
        <div>
            <span className="material-icons-outlined">history</span>
            <label>History</label>
        </div>
        <div>
            <span className="material-icons-outlined">watch_later</span>
            <label>Watch Later</label>
        </div>
        <div>
            <span className="material-icons-outlined">thumb_up</span>
            <label>Linked Videos</label>
        </div>
        <div className="separator"></div>
        <h5 className="heading">SUBSCRIPTIONS</h5>
        <div>
            <span className="material-icons-outlined">music_note</span>
            <label>Music</label>
        </div>
        <div>
            <span className="material-icons-outlined">sports_rugby</span>
            <label>Sports</label>
        </div>
        <div>
            <span className="material-icons-outlined">sports_handball</span>
            <label>Gaming</label>
        </div>
        <div>
            <span className="material-icons-outlined">closed_caption_off</span>
            <label>Movies & Shows</label>
        </div>
        <div className="separator"></div>
        <h5 className="heading">MORE FROM YOUTUBE</h5>
        <div>
            <span className="material-icons-outlined">preview</span>
            <label>Youtube Premium</label>
        </div>
        <div>
            <span className="material-icons-outlined">theaters</span>
            <label>Movies & Shows</label>
        </div>
        <div>
            <span className="material-icons-outlined">sports_esports</span>
            <label>Gaming</label>
        </div>
        <div>
            <span className="material-icons-outlined">live_tv</span>
            <label>Live</label>
        </div>
        <div>
            <span className="material-icons-outlined">school</span>
            <label>Fashion & Beauty</label>
        </div>
        <div>
            <span className="material-icons-outlined">lightbulb</span>
            <label>Learning</label>
        </div>
        <div>
            <span className="material-icons-outlined">sports_mma</span>
            <label>Sports</label>
        </div>
        <div className="separator"></div>
        <div>
            <span className="material-icons-outlined">settings</span>
            <label>Settings</label>
        </div>
        <div>
            <span className="material-icons-outlined">flag</span>
            <label>Report History</label>
        </div>
        <div>
            <span className="material-icons-outlined">help_outline</span>
            <label>Help</label>
        </div>
        <div>
            <span className="material-icons-outlined">textsms</span>
            <label>Send feedback</label>
        </div>
    </div>;
}