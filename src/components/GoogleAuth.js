import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {googleSignIn, googleSignOut} from '../actions';
import {useGoogleLogin, useGoogleLogout} from 'react-google-login';

const clientId = '1088290154319-um06hbok0c1kv7grtqkeimiriuqo1bdd.apps.googleusercontent.com'

const GoogleAuth = (props) => {
    const dispatch = useDispatch();
    const isSignIn = useSelector(state => state.auth.isSignIn);

    // callback sign in & sign out
    const onSignInSuccess = (res) => {
        const userId = res.googleId;
        dispatch(googleSignIn(userId));
    };
    const onSignOutSuccess = (res) => {
        dispatch(googleSignOut());
    };

    // register google login
    const {signIn} = useGoogleLogin({
        onSuccess: onSignInSuccess,
        clientId,
        isSignedIn: true,
    });
    const {signOut} = useGoogleLogout({
        onLogoutSuccess: onSignOutSuccess,
        clientId
    });

    // render button base on state
    const renderAuthButton = () => {
        if (isSignIn === null) return null;
        if (isSignIn)
            return (
                <button className="ui red google button" onClick={signOut}>
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        if (!isSignIn)
            return (
                <button className="ui red google button" onClick={signIn}>
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            );
    };

    return (
        <div>
            {renderAuthButton()}
        </div>
    );
};

export default GoogleAuth;


