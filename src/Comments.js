import { useState, useEffect, useRef } from 'react'
import { SignInGoogle, getComments, addComment } from './FirebaseService'
import './Comments.css'

export const Comments = (props) => {

    const [loaded, setloaded] = useState(false);
    const [comments, setcomments] = useState([]);
    const textRef = useRef('');

    const loadComments = () => {
        getComments(setcomments);
    }

    useEffect(() => {
        if (!loaded) {
            loadComments();
            setloaded(true);
        }
    }, [loaded]);

    return props.loggedin ?
        <div className="comments">
            <div className="comments-top-section">
                <textarea ref={textRef} type="text"></textarea>
                <button onClick={() => { addComment(textRef.current.value);textRef.current.value="";loadComments();}}>Comment</button>
            </div>

            {
                comments.map((c,i) => {
                    return <div className="comment-item">
                        <div className="comment-item-left">
                            <img src={"https://picsum.photos/200/300?random="+i} />
                            <div className="comment-item-left-right">
                                <p className="comment-item-left-right-username">{c.text} </p>
                                <div className="comment-item-left-right-comment">{c.docid}</div>
                                <button>Reply</button>
                            </div>
                        </div>
                        <div className="comment-item-right">
                            <span class="material-icons-outlined">more_vert</span>
                        </div>
                    </div>
                })
            }
        </div> :
        <button onClick={() => { SignInGoogle() }}>Login</button>

}