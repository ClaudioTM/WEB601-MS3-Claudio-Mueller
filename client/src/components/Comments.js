import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { connect } from 'react-redux';
import {addComment, retrieveComments } from '../redux/actions/commentActions'
import './Comments.css';

function Comments({user, authenticated, comments, addComment, retrieveComments}){

    const [userId, setUserId] = useState("");
    const [comment, setComment] = useState("");
    const [allComments, setAllComments] = useState([])

    Axios.defaults.withCredentials = true;

 

    async function handleSubmit(e) {
        await addComment(userId, comment);
    }

    async function handleRetrieve() {
       const res = await retrieveComments();
    }

    useEffect(()=> {
        if(user !== null) {
            setUserId(user[0].ID)
        }
        handleRetrieve();
        if(comments !== []) {
            setAllComments(comments)
        }
    }, []);

    return (
        <div>
            {authenticated ? (
                <>
               <ul>
               {comments.map((comment) => {
                  return <li>{comment.comment} by {comment.username}</li>
               })}
            </ul>
            <form>
                <input 
                  onChange={(e)=> {
                    setComment(e.target.value);
                  }}
                ></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            </>
            ) : (
                <p>Please login to comment</p>
            )}
            
        </div>
        
    );
}

// Sets redux state to props
function mapStateToProps(state) {
    return {
      authenticated: state.authReducer.authenticated,
      user: state.authReducer.user,
      comments: state.commentReducer.comments
    };
  }
  

  export default connect(mapStateToProps, {addComment, retrieveComments})(
    Comments,
  );
