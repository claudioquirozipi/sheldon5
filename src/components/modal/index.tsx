import * as React from 'react';

//Styled-Components
import {
    ModalContainer
} from './styled';


function Modal(props: any) {
    
    return(
        <ModalContainer bgColor="red">
            {props.children}
        </ModalContainer>
    )
}

export default Modal;

