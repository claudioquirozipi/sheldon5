import * as React from 'react';

//Styled-Components
import {
    InputSubmitSC
} from './styled';

//Interface
interface iInputSubmit {
    value: string;
}

function InputSubmit(props: iInputSubmit) {
    const {value} = props;
    return(


        <InputSubmitSC>
            <input type="submit" value={value}/>
        </InputSubmitSC>
    )
}

export default InputSubmit;