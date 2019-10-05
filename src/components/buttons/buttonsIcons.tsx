import * as React from 'react';

//Styled-Components
import {
    ButtonsIconsSC
} from './styled';
//Interface
interface iButtonsIcons {
    children: any;
    imgIcon: string;
    bgColor: string;
    disable?: boolean;
}
function ButtonsIcons(props: iButtonsIcons) {
    const {children, imgIcon, bgColor, disable} = props;
    return(
        <ButtonsIconsSC bgColor={bgColor} disable={disable}>
            <img src={imgIcon} alt="icon"/>
            {children}
        </ButtonsIconsSC>
    )
}

export default ButtonsIcons;