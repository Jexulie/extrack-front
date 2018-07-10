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
    // on click do loading when logged in cancel loading
    let requestLoading = () => console.log('loading')

    return(
        <FacebookLogin
            appId={auth.FacebookKey}
            autoLoad={false}
            textButton="Log-in with Facebook"
            fields="name, email, picture"
            onFailure={loginFailed}
            onClick={requestLoading}
            callback={responseFacebook}
            cssClass="waves-effect waves-light btn-large  red darken-2 facebooklogin"
            cookie={true}
        />
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Facebook);