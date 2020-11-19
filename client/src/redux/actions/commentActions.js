import axios from 'axios';

export const addComment = (userId, comment) => (dispatch) => {    
    console.log('hit action with userId', userId)
    axios.post('http://localhost:7000/addcomment', {
        userID: userId, 
        comment: comment,
    }).then((res) => {
       console.log('comment result is', res);
    }).catch((err) => {
        console.log('comment error isss', err);
      });
};

export const retrieveComments = () => (dispatch) => {
    console.log('retrieving comments')
    axios.get('http://localhost:7000/retrievecomments')
    .then((res) => {
        dispatch({
            type: 'SET_COMMENTS',
            payload: res.data,
        })
    }).catch((err) => {
        console.log('error retrieving comments', err)
    })
}