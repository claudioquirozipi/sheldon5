import * as React from 'react';

//Compenents
import GridContainerD from '../grid/gridContainerD';

//Components Library
import ContainerCenter from '../../components/modal/containerCenter';
import Paper from '../../components/paper';
import Form from '../../components/form/form';
import InputPassword from '../../components/form/inputPassword';
import InputSubmit from '../../components/form/inputSubmit';

function NewPassword() {
    return(
        <GridContainerD>
            <ContainerCenter bgColor="#F8F8F8">
                <Paper urlClouse="/">
                    <Form>
                        <h1>Create a new<br/>password</h1>
                        <InputPassword placeholder="Password" error="hay un error"/>
                        <InputPassword placeholder="Repassword" error="hay un error"/>
                        <InputSubmit value="Create" />
                    </Form>
                </Paper>
            </ContainerCenter>
        </GridContainerD>
    )
}

export default NewPassword;