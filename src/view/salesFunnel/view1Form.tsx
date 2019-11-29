import * as React from 'react';
import styled from 'styled-components';
//Helpers
import {handleEditAxiosDataView1} from '../../helpers/salesFunnel/editDataView1';
const FormSC = styled.form`
    background: white;
    padding: 3px 6px;
    border-radius: 8px;
    position: relative;
    top: ${(props:iView1FormSC) => props.positionAndDataForm.top +"px"};
    left: ${(props:iView1FormSC) => props.positionAndDataForm.left +"px"};
`;
//Interface
interface iView1Form {
    token: string;
    positionAndDataForm: {
        top: number;
        left: number;
        id: string;
        className: string;
        data: {}
    }
}
interface iView1FormSC {
    positionAndDataForm: {
        top: number;
        left: number;
    }
}

function View1Form(props:iView1Form) {
    const {positionAndDataForm, token} = props;
    const [valueForm, setValueForm] = React.useState("");
    return(
        <FormSC 
            positionAndDataForm={positionAndDataForm} 
            onSubmit={(e)=>handleEditAxiosDataView1(e, positionAndDataForm, valueForm, token)}
        >
            <label htmlFor="">label</label>
            <input type="text" onChange={(e)=>setValueForm(e.target.value)}/>
            <input type="submit" value="editar"/>
        </FormSC>
    )
}

export default View1Form;