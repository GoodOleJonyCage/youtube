import { Comments } from './Comments'
import './Detail.css'

export const Detail = (props) => {
    
    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    return <div className="detail">
               <div className="detail-left">
                    <img src="https://picsum.photos/200/300?random=1"></img>
                    <div className="bottom-info">
                        <div className="bottom-info-left">
                            <div className="heading">2021 Honda CB650R | First Ride Review</div>
                            <div className="info">245,003 views Apr 30, 2021</div>
                        </div>    
                        <div className="bottom-info-right">
                            <div>
                                <span class="material-icons-outlined">recommend</span>
                                <span>3k</span>
                            </div>
                             <div>
                                <span class="material-icons-outlined">thumbs_up_down</span>
                                <span>71</span>
                             </div>
                             <div>
                                <span class="material-icons-outlined">mobile_screen_share</span>
                                <span>Share</span>
                             </div>
                             <div>
                                <span class="material-icons-outlined">save_alt</span>
                                <span>Save</span>
                             </div>
                        </div>    
                    </div>
                    <Comments {...props}/>
               </div>
            <div className="detail-right">
                {
                    list.map((i,index) => {

                        return <div>
                            <img src={"https://picsum.photos/200/300?random="+ index}></img>
                            <div className="detail-info">
                                <div>
                                    <span className="heading">
                                        Beautiful Relaxing Music • Peaceful Piano Music & Guitar Music | Sunny Mornings by Peder B. Helland
                                    </span>
                                    <span className="small-heading">hi 2</span>
                                </div>
                                <div>
                                    <span class="material-icons-outlined">more_vert</span>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            </div>
}