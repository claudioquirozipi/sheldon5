import * as React from 'react';

//Compenents
import GridContainerD from '../grid/gridContainerD';

//Components Library
import ContainerCenter from '../../components/modal/containerCenter';
import Paper from '../../components/paper';
import Form from '../../components/form/form';
import InputUser from '../../components/form/inputUser';
import InputEmail from '../../components/form/inputEmail';
import InputPassword from '../../components/form/inputPassword';
import InputSubmit from '../../components/form/inputSubmit';
import InputPhone from '../../components/form/inputPhone';
import InputCompany from '../../components/form/inputCompany';

//interface
interface iSingUp {
    handleSubmit: any;
    setUser: any;
    setEmail: any;
    setPassword: any;
    setPhone: any;
    setCompany: any;
}
function SingUp(props: iSingUp) {
    const {
        handleSubmit,
        setUser,
        setEmail,
        setPassword,
        setPhone,
        setCompany
    } = props;
    return(
        <GridContainerD>

            <ContainerCenter bgColor="#F8F8F8">
                <Paper urlClouse="/">
                    <Form onSubmit={handleSubmit}>
                        <h1>Welcome <br/>to Sheldon</h1>
                        <InputUser setValue={setUser} placeholder="User" error="hay un error"/>
                        <InputEmail setValue={setEmail} placeholder="Email" error="hay un error"/>
                        <InputPassword setValue={setPassword} placeholder="Password" error="hay un error"/>
                        <InputPassword  placeholder="Repassword" error="hay un error"/>
                        <InputPhone setValue={setPhone} placeholder="Phone" error="hay un error" />
                        <InputCompany setValue={setCompany} placeholder="Company" error="hay un error" />

                        <InputSubmit value="hola" />
                    </Form>
                </Paper>
            </ContainerCenter>
        </GridContainerD>
    )
}

export default SingUp;