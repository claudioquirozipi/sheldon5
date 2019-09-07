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
    setValue?: any;
}
function handleChage(e: any, setValue: any) {
    // Agrega el valor value al hook padre
    setValue(e.target.value);
}

function InputPhone(props: iInput) {
    const {placeholder, error, setValue} = props;
    return(
        <ContainerInput>
            <img src={img} alt=""/>
            <input type="number" placeholder={placeholder} onChange={(e:any) =>handleChage(e, setValue)}/>
            <span>{error}</span>
        </ContainerInput>
    )
}

export default InputPhone;