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

function SingUp() {
    return(
        <GridContainerD>

            <ContainerCenter bgColor="#F8F8F8">
                <Paper urlClouse="/">
                    <Form>
                        <h1>Welcome <br/>to Sheldon</h1>
                        <InputUser placeholder="User" error="hay un error"/>
                        <InputEmail placeholder="Email" error="hay un error"/>
                        <InputPassword placeholder="Password" error="hay un error"/>
                        <InputPassword placeholder="Repassword" error="hay un error"/>
                        <InputPhone placeholder="Phone" error="hay un error" />
                        <InputCompany placeholder="Company" error="hay un error" />

                        <InputSubmit value="hola" />
                    </Form>
                </Paper>
            </ContainerCenter>
        </GridContainerD>
    )
}

export default SingUp;