import * as React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


//Components
import CsvLoader2 from '../../view/csvLoader/csvL2';

function handleSubmit2(e: any, formData: any, token: string, setColorImg: any, inputSubmit: boolean, setInputSubmit: any, setLoader: any, history: any) {
    e.preventDefault();
    if(inputSubmit) {
        console.log("dentro del submit",formData);
    
        let fd = new FormData();
        fd.append("csv", formData);
    
        console.log("subiendo archivo", fd, token);
        setLoader(true);
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
            setColorImg("#3FC180");
            setLoader(false);
            setTimeout(() => {
                history.push("/");
            }, 3000);
        })
        .catch((error) => {
            console.log("este es un error",error);
            setColorImg("#FF6B81");
            setInputSubmit(false);
            setLoader(false);
        })
    }
}

function ControllerCsvLoader(props: any) {
    const {history} = props;
    
    return(
        <>
            <CsvLoader2 onSubmit={handleSubmit2}  history={history}/>  
        </>
    )
}
export default withRouter(ControllerCsvLoader);