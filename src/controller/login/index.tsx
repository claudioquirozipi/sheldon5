import * as React from 'react';
import axios from 'axios';

//Components
import Login from '../../view/login';


function handleSubmit(e:any, email:string, password: string) {
    e.preventDefault(); 
    console.log("submit",email, password)
    axios.post(process.env.API + 'login_user',
            {
                "email": email,
                "password": "hola"
            })
            .then(({data}) => {
                console.log(data);
                // localStorage.setItem('token', data.token);
                
            })
            .catch((error) => {console.log("este es un error",error)}
    );
}

function ControllerLogin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    return(
        <Login setEmail={setEmail} setPassword={setPassword} handleSubmit={(e:any) => handleSubmit(e,email,password)}/>
    )
}

export default ControllerLogin;