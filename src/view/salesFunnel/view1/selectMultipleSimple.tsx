import * as React from 'react';


export interface SelectMultipleSimpleProps {
    setValueForm: any;
    options:string[]
}
function handleChange(e:any,value: string[], setValue: any) {
    if(e.target.checked) {
        const returnValue = [...value, e.target.value]
        setValue(returnValue);        
    } else {
        const returnValue = [...value].filter((val) => val!== e.target.value);
        setValue(returnValue);
    }
}
const SelectMultipleSimple: React.SFC<SelectMultipleSimpleProps> = (props) => {
    const {setValueForm, options} = props;
    const [value, setValue] = React.useState([]);
    React.useEffect(()=>{
        setValueForm(value);
        console.log("se agregó este dato en el selector multiple", value);
    }, [value]);
    return (  
        <ul>
            {
                options.map((dato, i)=>{
                    return(
                        <li key={i}>
                            <label>
                                <input 
                                    value={i} 
                                    type="checkbox" 
                                    onChange={(e) => handleChange(e,value, setValue)}
                                />
                                {dato}   
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    );
}
 
export default SelectMultipleSimple;