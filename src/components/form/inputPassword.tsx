import * as React from 'react';

//Styled-Components
import {
    ContainerInput
} from './styled';
//Assets
import * as img1 from './img/email.svg';
import * as img2 from './img/eye.svg';

interface iInput {
    placeholder: string;
    error: string;
    setValue?: any;
}
function handleChage(e:any,setValue:any) {
    // Agrega el valor value al hook padre
    setValue(e.target.value);
}

function InputPassword(props: iInput) {
    const {placeholder, error, setValue} = props;
    return(
        <ContainerInput>
            <img src={img1} alt=""/>
            <input type="password" placeholder={placeholder} onChange={(e:any) =>handleChage(e, setValue)}/>
            <img src={img2} alt=""/>
            <span>{error}</span>
        </ContainerInput>
    )
}

export default InputPassword;