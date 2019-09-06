import * as React from 'react';

//Styled-Components
import {
    GridContainerESC
} from './styled';


function GridContainerE(props: any) {
    return(
        <GridContainerESC>
            {props.children}
        </GridContainerESC>
    )
}
export default GridContainerE;