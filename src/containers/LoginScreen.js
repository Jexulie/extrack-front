import React, { Component } from 'react';
import '../css/loginscreen.css'

import Facebook from './LoginScreen/Facebook';

export default props => {
    return(
        <div className="loginscreen container">
            <div className="wrapper center">
                <div className="header center">
                    <h2>Welcome To Ex-Track App !</h2>
                    <h5>Login to Proceed</h5>
                </div>
                <div className="login">
                    <Facebook/>
                </div>
            </div>
        </div>
    )
}