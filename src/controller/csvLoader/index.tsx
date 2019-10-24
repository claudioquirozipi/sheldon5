import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';



//Components
import CsvLoader1 from '../../view/csvLoader/csvL1';
import CsvLoader2 from '../../view/csvLoader/csvL2';
import CsvLoader3 from '../../view/csvLoader/csvL3';

const ContainerButtonsNav = styled.div`
    position: fixed;
    top: 50px;
    right: 50px;
`;

//Interface
interface iCsvView {
    view: number;
}
function handleSubmit2(e: any, formData: any, token: string) {
    e.preventDefault();
    
    const file = document.getElementById("file");
    console.log("inputformdata", file.files[0]);
    let fd = new FormData();
    fd.append("csv", file.files[0]);
    

    console.log("subiendo archivo", formData, token);
    axios.post(
        process.env.API + "upload_csv",
        fd,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            }
        }
    )
    .then(({data}) => {
        console.log("se subió con extito",data);
    })
    .catch((error) => {
        console.log("este es un error",error);
    })
}

function ControllerCsvLoader() {
    const [stateView, setStateView] = React.useState(1);
    
    return(
        <>
            <ContainerButtonsNav>
                <button onClick={()=>setStateView(1)}>1</button>
                <button onClick={()=>setStateView(2)}>2</button>
                <button onClick={()=>setStateView(2)}>3</button>
                <button onClick={()=>setStateView(2)}>4</button>
                <button onClick={()=>setStateView(5)}>5</button>
                <h1>{stateView}</h1>
            </ContainerButtonsNav>
            {(stateView===1) ?<CsvLoader1 />: <></>}
            {(stateView===2) ?<CsvLoader2 onSubmit={handleSubmit2} />: <></>}
            {(stateView===5) ?<CsvLoader3 />: <></>}
        </>
    )
}
export default ControllerCsvLoader;