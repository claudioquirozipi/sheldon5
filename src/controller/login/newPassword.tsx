import * as React from 'react';
import axios from 'axios';

//Redux
import { useDispatch, useSelector} from 'react-redux';
import {
    newPasswordAccion,
    newPasswordOkAccion,
    newPasswordErrorAccion
} from '../../redux/accion/loginAccion';
//Components
import NewPassword from '../../view/login/newPassword';

function handleNewPassword(e: any, password: string, token: string , match: any, history: any, dispatch: any) {
    e.preventDefault();
    const newPassword = () =>dispatch(newPasswordAccion());
    const newPasswordOk = () => dispatch(newPasswordOkAccion());
    const newPasswordError = () => dispatch(newPasswordErrorAccion());

    newPassword();

    console.log("token",token, "parametro", match.params.token);
    axios.post(process.env.API + 'update_password',
        {
            "password": password,
            "token": match.params.token
        }
    )
    .then(({data}) => {
        console.log(data);                
        newPasswordOk();
        history.push("/login");
    })
    .catch((error) => {
        console.log("este es un error",error);
        newPasswordError();
    })
}

function ControllerNewPassword(props: any) {
    const {match, history} = props;
    const dispatch = useDispatch();
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const token = useSelector( (state:any) => state.user.user.token);
    return(
        <NewPassword 
            setPassword={setPassword} 
            setRePassword={setRePassword} 
            handleNewPassword={(e:any)=>handleNewPassword(e,password, token, match, history, dispatch)}
        />
    )
}

export default ControllerNewPassword;