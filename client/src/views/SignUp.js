import React from 'react';
import '../../src/App.css';
import Login from '../components/Login';

export default function SignUp() {
    return(
        <>
            <h1 className='sign-up'>LOGIN or SIGNUP</h1>
            <Login />
        </>
    );
}