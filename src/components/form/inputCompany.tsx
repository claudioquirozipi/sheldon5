import * as React from 'react';

//Styled-Components
import {
    ContainerInput
} from './styled';
//Assets
import * as img1 from './img/company.svg';

interface iInput {
    placeholder: string;
    error: string;
}

function InputCompany(props: iInput) {
    const {placeholder, error} = props;
    return(
        <ContainerInput>
            <img src={img1} alt=""/>
            <input type="text" placeholder={placeholder}/>
            <span>{error}</span>
        </ContainerInput>
    )
}

export default InputCompany;