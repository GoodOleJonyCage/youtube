import { useState, useEffect, useRef } from 'react'
import { SignInGoogle, getComments, addComment, addReplyComment } from './FirebaseService'
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
            <div className="comments-container">
                <div className="comments">

                    <div className="comments-top-section">
                        <textarea ref={textRef} type="text"></textarea>
                        <button onClick={() => { addComment(textRef.current.value); textRef.current.value = ""; loadComments(); }}>Comment</button>
                    </div>
                    {
                        comments.map((c, i) => {
                            return <div className="comment-item">
                                <div className="comment-item-left">
                                    <img src={"https://picsum.photos/200/300?random=" + i} />
                                    <div className="comment-item-left-right">
                                        <p className="comment-item-left-right-username">{c.text} </p>
                                        <div className="comment-item-left-right-comment">{c.docid}</div>
                                        <button
                                            onClick={() => { addReplyComment(c.docid, textRef.current.value); loadComments(); }}
                                        >Reply</button>
                                    </div>
                                </div>
                                <div className="comment-item-right">
                                    <span className="material-icons-outlined">more_vert</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div> :
        <button onClick={() => { SignInGoogle() }}>Login</button>

}