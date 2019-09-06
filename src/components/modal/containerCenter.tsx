import * as React from 'react';

//Styled-Components
import {
    ContainerCenterContainer
} from './styled';

interface iContainerCenter {
    children: any;
    bgColor: string;
}
function ContainerCenter(props: iContainerCenter) {
    const {bgColor} = props
    return(
        <ContainerCenterContainer bgColor={bgColor}>
            {props.children}
        </ContainerCenterContainer>
    )
}

export default ContainerCenter;