import * as React from 'react';

//Styled-Components
import {
    ButtonSC
} from './styled';

//Interface
interface iButton {
    text: string;
    bgColor: string;
    disable: boolean;
}

function Button(props: iButton) {
    const {text, bgColor, disable} = props;
    return(
        <ButtonSC bgColor={bgColor} disable={disable}>
            {text}
        </ButtonSC>
    )
}

export default Button;