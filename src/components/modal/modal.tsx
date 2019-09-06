import * as React from 'react';

//Styled-Compoenents
import {
    ContainerModal
} from './styled';

//Interface
interface iModalCQ {
    children: any;
    view: boolean;
}
function ModalCQ(props: iModalCQ) {
    const {children, view} = props
    return(
        <ContainerModal view={view}>
            {children}
        </ContainerModal>
    )
}

export default ModalCQ;