import * as React from 'react';

//Components
import GridContainerC from '../grid/gridContainerC';

//Styled-Components
import {
    ContainerButtons
} from './components/styled';

//Componens-Library
import ButtonsIcons from '../../components/buttons/buttonsIcons';


function MailIntegrations() {
    return(
        <GridContainerC>
            <h1>mail</h1>
            <ContainerButtons>
                <ButtonsIcons>Authentication</ButtonsIcons>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
        </GridContainerC>
    )
}

export default MailIntegrations;