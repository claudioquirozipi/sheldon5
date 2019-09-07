import * as React from 'react';
import axios from 'axios';

//Compoenents
import SingUp from '../../view/login/singup';

function handleSubmit(e: any, user:string, email:string, password:string, phone:string, company:string) {
    e.preventDefault();
    console.log("singup: ", user, email, password, phone, company)
    axios.post(process.env.API + 'register_user',
            {
                "name": "rafael",
                "email": "ts@ts.ts",
                "phone": "999998419",
                "company": "rafa sac",
                "password": "1234"
            })
            .then(({data}) => {
                console.log(data);
                // localStorage.setItem('token', data.token);
                
            })
            .catch((error) => {console.log("este es un error",error)}
    );
}
function ControllerSingUp() {
    const [user, setUser] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [company, setCompany] = React.useState("");
    return(
        <SingUp
            handleSubmit={(e: any)=>handleSubmit(e,user, email, password, phone, company)}
            setUser={setUser}    
            setEmail={setEmail}
            setPassword={setPassword}
            setPhone={setPhone}
            setCompany={setCompany}
        />
    )
}

export default ControllerSingUp;