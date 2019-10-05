import * as React from 'react';
import axios from 'axios';
import RecoverPassword from '../../view/login/recoverPassword';
//Redux
import {useDispatch} from 'react-redux';
import {
    recoverPasswordAccion,
    recoverPasswordOkAccion,
    recoverPasswordErrorAccion
} from '../../redux/accion/loginAccion';

function handleRecoverPassword(e: any, email: string, dispatch: any) {
    e.preventDefault();
    const recoverPassword = () => dispatch(recoverPasswordAccion());
    const recoverPasswordOk = () => dispatch(recoverPasswordOkAccion());
    const recoverPasswordError = () => dispatch(recoverPasswordErrorAccion());

    recoverPassword();
    axios.post(process.env.API + 'recover_password',
        {
            "email": email
        }
    )
    .then(({data}) => {
        console.log(data);                
        recoverPasswordOk();
    })
    .catch((error) => {
        console.log("este es un error",error);
        recoverPasswordError();
    })
}
function ControllerRecoverPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState("");
    return(
        <RecoverPassword 
            recoverPassword={(e: any)=>handleRecoverPassword(e, email, dispatch)}
            setValue={setEmail}
        />
    )
}

export default ControllerRecoverPassword;