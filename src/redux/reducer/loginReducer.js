import {
    USER_LOGIN,
    USER_LOGIN_OK,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
    USER_LOGOUT_OK,
    USER_LOGOUT_ERROR,
    USER_SINGUP,
    USER_SINGUP_OK,
    USER_SINGUP_ERROR,
    USER_RECOVERPASSWORD,
    USER_RECOVERPASSWORD_OK,
    USER_RECOVERPASSWORD_ERROR,
    USER_NEWPASSWORD,
    USER_NEWPASSWORD_OK,
    USER_NEWPASSWORD_ERROR
} from '../types';

const inicialState = {
    login: false,
    dataCsv: false,
    emailValid: false,
    user: {},
    error: null
}

export default function( state = inicialState , action) {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                login: false,
                user: {},
                error: null
            }
        case USER_LOGIN_OK:
            return {
                ...state,
                login: true,
                user: action.payload,
                error: null
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                login: false,
                user: {},
                error: true
            }
        case USER_LOGOUT:
            return {
                ...state,
                error: null   
            }
        case USER_LOGOUT_OK:
            return {
                ...state,
                login: false,
                user: {},
                error: null   
            }
        case USER_LOGOUT_ERROR:
            return {
                ...state,
                error: true
            }
        case USER_SINGUP:
        return {
            ...state,
            error: null
        }
        case USER_SINGUP_OK:
        return {
            ...state,
            error: null
        }
        case USER_SINGUP_ERROR:
        return {
            ...state,
            error: true
        }
        case USER_RECOVERPASSWORD:
        return {
            ...state,
            error: null
        }
        case USER_RECOVERPASSWORD_OK:
        return {
            ...state,
            error: null
        }
        case USER_RECOVERPASSWORD_ERROR:
        return {
            ...state,
            error: true
        }
        case USER_NEWPASSWORD:
        return {
            ...state,
            error: null
        }
        case USER_NEWPASSWORD_OK:
        return {
            ...state,
            error: null
        }
        case USER_NEWPASSWORD_ERROR:
        return {
            ...state,
            error: true
        }

        default: 
            return state;
    }
}