import * as React from 'react';
import axios from 'axios';
//Redux
import {useDispatch} from 'react-redux';
import {
    loginAccion,
    loginOkAcction,
    loginErrorAcction
} from '../../redux/accion/loginAccion';

//Components
import Login from '../../view/login';





function handleSubmit(e:any, email:string, password: string, dispatch:any, history: any) {
    e.preventDefault(); 
    
    
    const loginStart = () => dispatch(loginAccion());
    const loginOk = (user: any) => dispatch(loginOkAcction(user));
    const loginError = () => dispatch(loginErrorAcction());

    console.log("submit",email, password)
    loginStart();
    axios.post(process.env.API + 'login_user',
            {
                "email": email,
                "password": password
            })
            .then(({data}) => {
                console.log(data);
                
                loginOk(data);
                history.push("/");
            })
            .catch((error) => {
                console.log("este es un error",error.response);
                loginError();
            }
    );
}

function ControllerLogin(props: any) {
    const {history} = props;
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    
    return(
        <Login 
            setEmail={setEmail} 
            setPassword={setPassword} 
            handleSubmit={(e:any) => handleSubmit(e,email,password, dispatch, history)}
        />
    )
}

export default ControllerLogin;