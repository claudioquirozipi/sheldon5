import * as React from 'react';
import styled from 'styled-components';

//Interfase 
interface iData {
    value: string;
    text: string;
}
interface iSelectMultiple  {
    title: string;
    onChange: any;
    data: iData[];
    icon: string;
}
interface iSelectMultipleSC {
    view: boolean;
}
const IconV = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#004DA9"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>)
const SelectMultipleSC = styled.div`
    position: relative;
    display: inline-block;
    h3 {
        margin: 0 10.6px;
        background: white;
        color: #004DA9;
        font-size: 14px;
        font-weight: 500;
        width: 105px;
        height: 28px;
        border: 2px solid #004DA9;
        outline: none;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            margin-right: 8px;
            width: 11px;
            height: 11px;

        }
    }
    h3 span {
        background: white;
        color: red;
    }
    ul {
        display: ${(props:iSelectMultipleSC)=>props.view ? "block": "none"};
        position: absolute;
        top: 30px;
        right: 0;
        background: white;
        border-radius: 8px;
        border: 1px solid black;
        width: auto;
        max-height: 220px;
        overflow-y: scroll;
        padding: 0;
    }
`;
function handleChange(e:any,value: string[], setValue: any) {
    if(e.target.checked) {
        const returnValue = [...value, e.target.value]
        setValue(returnValue);        
    } else {
        const returnValue = [...value].filter((val) => val!== e.target.value);
        setValue(returnValue);
    }
}
function SelectMultiple(props: iSelectMultiple) {
    const {title, onChange, data, icon} = props;
    const [value, setValue] = React.useState([]);
    const [view, setView] = React.useState(false);
    React.useEffect(()=> {
        onChange(value);
        console.log("ocurrión un cambio en value",value);
    }, [value]);
    return(
        <SelectMultipleSC view={view} >
            <h3 onClick={()=>setView(!view)}>
                <img src={icon} alt=""/>
                {title}
                <span >
                    <IconV />
                </span>
            </h3>
            
            <ul>
                {
                     data.map((dato, i)=>{
                        return(
                            <li key={i}>
                                <label>
                                    <input value={dato.value} type="checkbox" onChange={(e) => handleChange(e,value, setValue)}/>
                                    {dato.text}   
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </SelectMultipleSC>
    )
}

export default SelectMultiple;