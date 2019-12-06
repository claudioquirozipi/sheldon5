import * as React from 'react';

export interface SelectMultipleProps {
    setValueForm: any;
    options: string[];
}
function hadleAddTag(inputTag: string, setInputTag:any, tags: string[], setTags: any, setValueForm: any) {
    const testTag = tags.filter(filterTag => filterTag === inputTag);
    if(testTag.length===0){
        const newTag = [...tags, inputTag];
        setTags(newTag);
        setValueForm(newTag);
    }
    setInputTag("");
}
function handleRemoveTag(e: any, tag: string, tags:string[], setTags: any, setValueForm:any) {
    const newTag = tags.filter(filterTag => filterTag!==tag);
    setTags(newTag);
    setValueForm(newTag);
}
const SelectMultiple: React.SFC<SelectMultipleProps> = (props) => {
    const {setValueForm, options} = props;
    const [tags, setTags] = React.useState([]);
    const [inputTag, setInputTag] = React.useState("");
    return (  
        <>
            <ul>
                {tags.map((tag,i)=>(
                    <li key={i}>
                        {tag}
                        <span onClick={(e)=>handleRemoveTag(e,tag, tags, setTags, setValueForm)}>X</span>
                    </li>
                ))}
            </ul>
            <input list="datalistSelectMultiple" onChange={(e)=>setInputTag(e.target.value)} value={inputTag}/>
            <datalist id="datalistSelectMultiple"> 
                {
                    options.map((option, i)=>(
                        <option value={option}>{option}</option>
                    ))
                }
            </datalist>
            <input type="button" value="add tag" onClick={()=>hadleAddTag(inputTag,setInputTag, tags, setTags, setValueForm)}/>
        </>
        
    );
}
 
export default SelectMultiple;