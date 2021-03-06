import React  from 'react';
import { connect } from 'react-redux';
import { startLoading, authFailed, showInfo, hideInfo, apiCall } from '../../actions';
import FacebookLogin from 'react-facebook-login';
import auth from '../../auth/auth.json';

const Facebook = props => {

    let responseFacebook = res => {
        props.dispatch(apiCall(res, props.dispatch));
    }
    let loginFailed = () => {
        props.dispatch(authFailed('Auth Failed'));
        props.dispatch(showInfo());
        setTimeout(() => props.dispatch(hideInfo()), 5000)

    };
    // on click do loading when logged in cancel loading
    let requestLoading = () => props.dispatch(startLoading());

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