import * as React from 'react';

//Styled-Components
import {
    GridContainerASC
} from './styled';


function GridContainerA(props: any) {
    return(
        <GridContainerASC>
            {props.children}
        </GridContainerASC>
    )
}
export default GridContainerA;