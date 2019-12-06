import * as React from 'react';
//Helpers
import {handleFilterOption} from '../../helpers/salesFunnel/filter';
export interface InpuptAndSelectMultipleProps {
    title: string;
    setDataFilter: any;
    token: string;
    key: string;
}
 
const InpuptAndSelectMultiple: React.SFC<InpuptAndSelectMultipleProps> = (props) => {
    const {title, setDataFilter, token, key} = props;
    const [options, setOptons] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");
    const [tags, setTags] = React.useState([]);

    
    function handleOnChageInput(e: any) {
        handleFilterOption(token, key, e.target.value, setOptons);
        setInputValue(e.target.value);
    }
    function hadleAddTag(e:any) {
        e.preventDefault();
        const testTag = tags.filter((filterTag:string) => filterTag === inputValue)
        if(testTag.length===0){
            const newTag= [...tags, inputValue];
            setTags(newTag);
            setInputValue("");
            setDataFilter(newTag);
        }
    }
    function handleRemoveTag(e: any, tag:string) {
        const newTag = tags.filter(filterTag => filterTag!==tag);
        setTags(newTag);
        setDataFilter(newTag);
    }
    return (  
        <div>
            <p>{title}</p>
            <span>v</span>
            <div>
                {tags.map((tag:string) => (
                    <div key={tag}>
                        {tag}
                        <span onClick={(e)=>handleRemoveTag(e,tag)}> X</span>
                    </div>))
                }
                <input 
                    placeholder="Name" 
                    list="nameOption" 
                    onChange={(e)=>handleOnChageInput(e)} 
                    value={inputValue}
                />
                <datalist id="nameOption">
                    {options.map((option, i)=>(
                        <option key={i} value={option}/>
                    ))}
                </datalist>
                <input onClick={hadleAddTag} type="button" value="add"/>
            </div>
        </div>
    );
}
 
export default InpuptAndSelectMultiple;