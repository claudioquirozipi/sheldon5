import * as React from 'react';

//Styled-Components
import {
    PaperSC
} from './styled';

//Interface
interface iPaper {
    children: any;
}

function Paper(props: iPaper) {
    return(
        <PaperSC>
            {props.children}
        </PaperSC>
    )
}

export default Paper;