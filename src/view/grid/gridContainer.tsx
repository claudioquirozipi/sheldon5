import * as React from 'react';

//Styled-Components
import {
    GridContainerSC
} from './styled';


function GridContainer(props: any) {
    return(
        <GridContainerSC>
            {props.children}
        </GridContainerSC>
    )
}
export default GridContainer;