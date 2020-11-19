import React, { useState, useEffect } from "react";
import Axios from 'axios';
import {loginUser, logoutUser, registerUser} from '../redux/actions/authActions'
import './Login.css';
import { connect } from 'react-redux';

function Login({loginUser, logoutUser, registerUser, user, authenticated}){

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setloginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    // const register = () => {
    //     Axios.post('http://localhost:7000/register', {
    //         username: usernameReg, 
    //         password: passwordReg,
    //     }).then((response)=>{
    //         console.log(response);
    //     });
    // };
    async function handleRegister(e) {
        e.preventDefault();
        console.log('hit register in login')
        await registerUser(usernameReg, passwordReg)
    }

    async function handleLogout(e) {
        e.preventDefault();
        // Axios.get('http://localhost:7000/logout', {
        // }).then((response)=>{
        //     console.log(response);
        // });
        await logoutUser();
    };

    // const login = () => {
    //     Axios.post('http://localhost:7000/login', {
    //         username: username, 
    //         password: password,
    //     }).then((response) => {

    //         if(response.data.message){
    //             setloginStatus(response.data.message)
    //         } else {
    //             setloginStatus(response.data[0].username);
    //         }
    //     });
    // };
    async function handleLogin(e) {
        e.preventDefault();
        console.log('hit handleLogin')
        await loginUser(username, password)
    }

    useEffect(()=> {
        Axios.get("http://localhost:7000/login").then((response) => {
            if (response.data.loggedIn == true) {
            setloginStatus(response.data.user[0].username);
        }
        });
    }, []);

    return (
        
        <div classname="Login">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text" 
                onChange={(e)=> {
                    setUsernameReg(e.target.value);
                }}/>
                <label>Password</label>
                <input type="text" 
                onChange={(e)=> {
                    setPasswordReg(e.target.value);
                }}/>
                <button onClick={handleRegister}> Register </button>
            </div>




            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username..." 
                onChange={(e)=> {
                    setUsername(e.target.value);
                }}
                />
                <input type="text" placeholder="Password..." 
                    onChange={(e)=> {
                        setPassword(e.target.value);
                }}
                />
                <button onClick={handleLogin}> Login </button> 
                <button onClick={handleLogout}> Logout </button>
                

                
            </div>
            {authenticated ? (
            <h1>{user[0].username}</h1>
            ) : (
                <h1>Not logged in</h1>
            )
            }

        </div>
    );
}

// export default Login;
function mapStateToProps(state) {
    return {
      authenticated: state.authReducer.authenticated,
      user: state.authReducer.user
    };
  }
  
  export default connect(mapStateToProps, { loginUser, logoutUser, registerUser })(
    Login,
  );