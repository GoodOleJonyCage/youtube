import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GetSearchResults } from './Youtubeservice'
import './ItemList.css'

import { NavLink } from 'react-router-dom';

export const ItemList = (props) => {
    
    const [list, setlist] = useState([]);
    useEffect(() => {
        GetSearchResults(props.searchterm, setlist);
    }, [props.searchterm]);

    return list == null ? <div className="no-data">NO DATA</div> : 
    list.map((i,index) => {
        return <div className="content-item" key={index}>
            <NavLink tag={Link} className="button"
                        to={{
                            pathname: '/detail',
                            state: { video:i },
                        }}>
                <img src={i.snippet.thumbnails.medium.url}></img>
            </NavLink>
            <div className="item-footer">
                <div className="item-footer-img">
                    <img src={i.snippet.thumbnails.default.url}></img>
                </div>
                <div className="item-footer-right">
                    <p>{i.snippet.title}</p>
                    <div className="item-footer-info">
                        <div>
                            {i.snippet.channelTitle}
                        </div>
                        <div className="item-footer-info-desc">
                            {i.snippet.publishedAt}
                        </div>
                    </div>
                </div>
                <div>
                    <span className="material-icons-outlined">more_vert</span>
                </div>
            </div>
        </div>
    });

}