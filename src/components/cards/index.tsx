import * as React from 'react';

//Styled-Components
import {
    CardSC
} from './styled';

//Interface 
interface iCardCQ {
    children: any;
}
function CardCQ(props: iCardCQ) {
    return(
        <CardSC>
            {props.children}
        </CardSC>
    )
}

export default CardCQ;