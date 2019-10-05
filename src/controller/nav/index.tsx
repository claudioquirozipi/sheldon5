import * as React from 'react';
import axios from 'axios';
//Redux
import { useDispatch, useSelector} from 'react-redux';
import {
    logoutAccion,
    logoutOkAcction,
    logoutErrorAcction,
    
} from '../../redux/accion/loginAccion';

//Components
import Nav from '../../view/nav/nav';

const handleLogout = (token: string, dispatch: any, history: any) => {
    const logout = () => dispatch(logoutAccion());
    const logoutOk = () => dispatch(logoutOkAcction());
    const logoutError = () => dispatch(logoutErrorAcction());
    console.log("se está ejecuntando el axios", token, dispatch, history);
    logout();
    axios.post(process.env.API + 'logout',
        { 
            "headers": {"Authorization" : token},
                "token": token
        }
        )
        .then(({data}) => {
            console.log("se serró con extito",data);
            logoutOk();
            history.push("/login");
        })
        .catch((error) => {
            console.log("este es un error",error);
            logoutError();
        }
    );
}
function ControllerNav(props: any) {
    const {history} = props;
    const dispatch = useDispatch();
    const token = useSelector( (state:any) => state.user.user.token);
    console.log("hola history", history);
    console.log("este es el token", token)
    return(
        <Nav handleLogout={() => handleLogout(token, dispatch, history)}/>
    )
}

export default ControllerNav;