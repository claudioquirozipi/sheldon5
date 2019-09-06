import * as React from 'react';

//Styled-Components
import {
    FormSC
} from './styled';

//Interface
interface iForm {
    onSubmit?: any;
    children: any;
}

function Form(props: iForm) {
    const {children, onSubmit} = props;
    return(
        <FormSC onSubmit={onSubmit}>
            {children}
        </FormSC>
    )
}

export default Form;