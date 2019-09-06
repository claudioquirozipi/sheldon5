import * as React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//Compenents
import GridContainerD from '../grid/gridContainerD';
//Components Library
import ContainerCenter from '../../components/modal/containerCenter';
import Paper from '../../components/paper';
import Form from '../../components/form/form';
import InputEmail from '../../components/form/inputEmail';
import InputPassword from '../../components/form/inputPassword';
import InputSubmit from '../../components/form/inputSubmit';

//Interface 
interface iLogin {
    setEmail: any;
    setPassword: any;
    handleSubmit: any;
}

function Login(props: iLogin) {
    const {setEmail, setPassword, handleSubmit} = props;
    return(
        <GridContainerD>
            <ContainerCenter bgColor="#F8F8F8">
                <Paper urlClouse="/"> 
                    <Form onSubmit={handleSubmit} >
                        <h1>Good to see<br/> you again</h1>
                        <InputEmail setValue={setEmail} placeholder="Email" error="hay un error"/>
                        <InputPassword setValue={setPassword} placeholder="Password" error="hay un error"/>
                        <InputSubmit value="hola" />
                        <Link to="/recoverpassword">Forgot password?</Link>
                    </Form>
                </Paper>
            </ContainerCenter>
        </GridContainerD>
    )
}

export default Login;