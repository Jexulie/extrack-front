import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginInfo } from '../../actions';
import FacebookLogin from 'react-facebook-login';
import auth from '../../auth/auth.json';

const Facebook = props => {

    let responseFacebook = res => {
        props.dispatch(loginInfo(res));
    }
    let loginFailed = () => console.log('failed')

    return(
        <FacebookLogin
            appId={auth.FacebookKey}
            autoLoad={false}
            fields="name, email, picture"
            onFailure={loginFailed}
            callback={responseFacebook}
            cssClass="btn"
            cookie={true}
            // icon="fa-facebook"
        />
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Facebook);