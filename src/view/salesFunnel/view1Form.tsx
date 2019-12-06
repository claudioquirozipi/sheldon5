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
//Components
import SelectMultipleSimple from './view1/selectMultipleSimple';
import SelectMultiple from './view1/selectMultiple';
//Interface
interface iView1Form {
    token: string;
    positionAndDataForm: {
        top: number;
        left: number;
        id: string;
        className: string;
        data: {},
        type: iclassNameType;
        options: string[]
    }
}
interface iclassNameType {
    textarea: boolean;
    text: boolean;
    email: boolean;
    date: boolean;
    selectMultipleSimple: boolean;
    selectMultiple: boolean;
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
    console.log("positionAndDataForm", positionAndDataForm);

    return(
        <FormSC 
        positionAndDataForm={positionAndDataForm} 
        onSubmit={(e)=>handleEditAxiosDataView1(e, positionAndDataForm, valueForm, token)}
        >
            <label htmlFor="">label</label>
            {positionAndDataForm.type.text ? <input type="text" onChange={(e)=>setValueForm(e.target.value)}/>:null}
            {positionAndDataForm.type.email ? <input type="email" onChange={(e)=>setValueForm(e.target.value)}/>:null}
            {positionAndDataForm.type.textarea? <textarea onChange={(e)=>setValueForm(e.target.value)}/>:null}
            {positionAndDataForm.type.date? <input type="date" name="" id=""/>:null}
            {positionAndDataForm.type.selectMultipleSimple? <SelectMultipleSimple options={positionAndDataForm.options} setValueForm={setValueForm}/>:null}
            {positionAndDataForm.type.selectMultiple?<SelectMultiple  options={positionAndDataForm.options} setValueForm={setValueForm} />:null}
            <input type="submit" value="editar"/>
        </FormSC>
        
    )
}

export default View1Form;