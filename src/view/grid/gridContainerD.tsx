import * as React from 'react';

//Styled-Components
import {
    GridContainerDSC
} from './styled';


function GridContainerD(props: any) {
    return(
        <GridContainerDSC>
            {props.children}
        </GridContainerDSC>
    )
}
export default GridContainerD;