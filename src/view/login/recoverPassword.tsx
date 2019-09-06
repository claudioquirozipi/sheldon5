import * as React from 'react';

//Compenents
import GridContainerD from '../grid/gridContainerD';


//Components Library
import ContainerCenter from '../../components/modal/containerCenter';
import Paper from '../../components/paper';
import Form from '../../components/form/form';
import InputEmail from '../../components/form/inputEmail';
import InputSubmit from '../../components/form/inputSubmit';

function RecoverPassword() {
    return(
        <GridContainerD>
            <ContainerCenter bgColor="#F8F8F8">
                <Paper urlClouse="/"> 
                    <Form>
                        <h1>Send a URL to you email</h1>
                        <InputEmail placeholder="Email" error="hay un error"/>
                        <InputSubmit value="Send" />
                    </Form>
                </Paper>
            </ContainerCenter>
        </GridContainerD>
    )
}

export default RecoverPassword;