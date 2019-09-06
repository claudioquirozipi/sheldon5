import * as React from 'react';

//Styled-Components
import {
    GridContainerCSC
} from './styled';


function GridContainerC(props: any) {
    return(
        <GridContainerCSC>
            {props.children}
        </GridContainerCSC>
    )
}
export default GridContainerC;