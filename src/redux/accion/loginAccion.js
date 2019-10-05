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



//Login
export const loginAccion = () => ({
    type: USER_LOGIN
});
export const loginOkAcction = (payload) => ({
    type: USER_LOGIN_OK,
    payload
});
export const loginErrorAcction = () => ({
    type: USER_LOGIN_ERROR
});

//Logout
export const logoutAccion = () => ({
    type: USER_LOGOUT
});
export const logoutOkAcction = () => ({
    type: USER_LOGOUT_OK
});
export const logoutErrorAcction = () => ({
    type: USER_LOGOUT_ERROR
});

//SingUp
export const singUpAccion = () => ({
    type: USER_SINGUP
})
export const singUpOkAccion = () => ({
    type: USER_SINGUP_OK
})
export const singUpErrorAccion = () => ({
    type: USER_SINGUP_ERROR
})

//Recover Password
export const recoverPasswordAccion = () => ({
    type: USER_RECOVERPASSWORD
})
export const recoverPasswordOkAccion = () => ({
    type: USER_RECOVERPASSWORD_OK
})
export const recoverPasswordErrorAccion = () => ({
    type: USER_RECOVERPASSWORD_ERROR
})

//NewPassword
export const newPasswordAccion = () => ({
    type: USER_NEWPASSWORD
})
export const newPasswordOkAccion = () => ({
    type: USER_NEWPASSWORD_OK
})
export const newPasswordErrorAccion = () => ({
    type: USER_NEWPASSWORD_ERROR
})
