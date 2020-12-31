import {SIGN_IN, SIGN_OUT} from './actionTypes';

export const googleSignIn = (userId) => {
    return {
        type: SIGN_IN,
        userId
    }
}

export const googleSignOut = () => {
    return {
        type: SIGN_OUT
    }
}