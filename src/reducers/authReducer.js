import {SIGN_IN, SIGN_OUT} from '../actions/actionTypes';

const INITIAL_STATE = {
    isSignIn: null,
    userId: null
}


const reducer =  (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SIGN_IN:
            return {...state, isSignIn: true, userId: action.userId}
        case SIGN_OUT:
            return {...state, isSignIn: false, userId: null}
        default:
            return state
    }
}

export default reducer;