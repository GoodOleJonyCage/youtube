import './ItemList.css'
import { NavLink } from 'react-router-dom';

export const ItemList = () => {

    var lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27,28,29,30,31,32,33];
    return lst.map(i => {
        return <div className="content-item">
            <NavLink to="/detail"  >
                <img src={"https://picsum.photos/200/300?random=" + i}></img>
            </NavLink>
            <div className="item-footer">
                <div className="item-footer-img">
                    <img src={"https://picsum.photos/200/300?random=" + i}></img>
                </div>
                <div className="item-footer-right">
                    <h4>Sample</h4>
                    <div className="item-footer-info">
                        <div>
                            Mantra Music Spirit
                        </div>
                        <div>
                            430K views . 1 year ago
                        </div>
                    </div>
                </div>
                <div>
                    <span class="material-icons-outlined">more_vert</span>
                </div>
            </div>
        </div>
    });

}