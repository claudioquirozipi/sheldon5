import * as React from 'react';

//Styled-Components
import {
    ButtonsIconsSC
} from './styled';
//Interface
interface iButtonsIcons {
    children: any;
}
function ButtonsIcons(props: iButtonsIcons) {
    return(
        <ButtonsIconsSC>
            {props.children}
        </ButtonsIconsSC>
    )
}

export default ButtonsIcons;