import * as React from 'react';

//Styled-Components
import {
    GridContainerBSC
} from './styled';


function GridContainerB(props: any) {
    return(
        <GridContainerBSC>
            {props.children}
        </GridContainerBSC>
    )
}
export default GridContainerB;