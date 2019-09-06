import * as React from 'react';

//Styled-Components
import {
    ContainerInput
} from './styled';
//Assets
import * as img from './img/email.svg';

interface iInput {
    placeholder: string;
    error: string;
}

function InputPhone(props: iInput) {
    const {placeholder, error} = props;
    return(
        <ContainerInput>
            <img src={img} alt=""/>
            <input type="number" placeholder={placeholder}/>
            <span>{error}</span>
        </ContainerInput>
    )
}

export default InputPhone;