import * as React from 'react';
import axios from 'axios';

//Redux
import {useDispatch} from 'react-redux';
import {
    singUpAccion,
    singUpOkAccion,
    singUpErrorAccion
} from '../../redux/accion/loginAccion';
//Compoenents
import SingUp from '../../view/login/singup';

function handleSubmit(e: any, user:string, email:string, password:string, phone:string, company:string, dispatch: any, history: any) {
    e.preventDefault();
    const singUp = () => dispatch(singUpAccion());
    const singUpOk = () => dispatch(singUpOkAccion());
    const singUpError = () => dispatch(singUpErrorAccion());
    singUp();
    axios.post(process.env.API + 'register_user',
        {
            "name": user,
            "email": email,
            "phone": phone,
            "company": company,
            "password": password
        }
    )
    .then(({data}) => {
        console.log("se ha creado correctamente", data);                
        history.push("/login");
        singUpOk();
    })
    .catch((error) => {
        console.log("este es un error",error);
        singUpError();
    })
}
function ControllerSingUp(props: any) {
    const {history} = props;
    const dispatch = useDispatch();
    console.log("history bien", history);
    const [user, setUser] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [company, setCompany] = React.useState("");
    return(
        <SingUp
            handleSubmit={(e: any)=>handleSubmit(e,user, email, password, phone, company, dispatch, history)}
            setUser={setUser}    
            setEmail={setEmail}
            setPassword={setPassword}
            setPhone={setPhone}
            setCompany={setCompany}
        />
    )
}

export default ControllerSingUp;