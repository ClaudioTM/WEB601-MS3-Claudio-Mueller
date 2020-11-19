import axios from 'axios';

export const loginUser = (username, password) => (dispatch) => {    
    axios.post('http://localhost:7000/login', {
        username: username, 
        password: password,
    }).then((res) => {
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data,
        })
    }).catch((err) => {
        console.log('login error', err);
        dispatch({
          type: 'LOGIN_FAIL',
        });
      });
};

export const registerUser = (usernameReg, passwordReg) => (dispatch) => {    
    console.log('hit register in actions')

    axios.post('http://localhost:7000/register', {
        username: usernameReg, 
        password: passwordReg,
    }).then((res)=>{
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data,
        })
    }).catch((err) => {
        console.log('register error', err);
        dispatch({
          type: 'REGISTER_FAIL',
        });
      });
}


export const logoutUser = () => (dispatch) => {    
    dispatch({
        type: 'LOGOUT_SUCCESS',
      });
}