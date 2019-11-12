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
}
interface iSelectMultipleSC {
    view: boolean;
}
const SelectMultipleSC = styled.div`
    position: relative;
    display: inline-block;
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
        height: 220px;
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
    const {title, onChange, data} = props;
    const [value, setValue] = React.useState([]);
    const [view, setView] = React.useState(false);
    React.useEffect(()=> {
        onChange(value);
        console.log("ocurrión un cambio en value",value);
    }, [value]);
    return(
        <SelectMultipleSC view={view}>
            <h3>
                {title}
                <span onClick={()=>setView(!view)}>
                    X
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