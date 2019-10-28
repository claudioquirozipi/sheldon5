import * as React from 'react';
//Redux
import { useSelector} from 'react-redux';
//Compenents
import GridContainerD from '../grid/gridContainerD';

//Components Library
import ContainerCenter from '../../components/modal/containerCenter';
import Button from '../../components/buttons';

//Styled-Components
import {
    ContainerCsvLoader,
    ImgContainer,
    DisplayNone,
    ContainerTooltips
} from './styled';
//Assets
import * as imgClose from '../../assets/img/csvLoader/close.svg';
//Interface
interface iImg {
    colorImg: string;
    loader: boolean;
}
interface iCsvLoader2 {
    onSubmit: any;
    history: any;
}
//Assets
function Img(props: iImg) {
    const {colorImg, loader} = props;
    return(
        <ImgContainer loader={loader}>
            <div></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" fill={colorImg}/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <span>Subir-CSV</span>
        </ImgContainer>
    )
}



function handleChange(e:any, setFormData: any, setInputSubmit: any) {
    setFormData(e.target.files[0]);
    console.log("formData",e.target.files[0]);
    setInputSubmit(true);
}

function CsvLoader2(props: iCsvLoader2) {
    const {onSubmit, history} = props;
    const [formData, setFormData] = React.useState(null);
    const token = useSelector( (state:any) => state.user.user.token);
    const [colorImg, setColorImg] = React.useState("#E6E6E6");
    const [inputSubmit, setInputSubmit] = React.useState(false);
    const [loader, setLoader] = React.useState(false);
    
    console.log("input submit",inputSubmit);
    return(
        <GridContainerD>
            <ContainerCenter bgColor="white">
                <form onSubmit={(e) => onSubmit(e, formData, token, setColorImg, inputSubmit, setInputSubmit, setLoader, history)}>
                    <ContainerCsvLoader inputColor={inputSubmit}>
                        <label htmlFor="clip">
                            <Img colorImg={colorImg} loader={loader}/>
                        </label>
                        <DisplayNone>
                            <input type="file" name="" id="clip" onChange={(e)=>handleChange(e, setFormData, setInputSubmit)}/>
                        </DisplayNone>
                        <h1>Valida y carga el CSV</h1>
                        <p>
                            Hazlo tal cual están las columnas, completando la información que<br/>
                            dispones en tu CRM, Linkedin, Excel, o cualquier otro formato<br/>
                            Para adjuntarla aqui y Sheldon pueda entenderla.
                        </p>
                        <input type="submit" value="enviar"/>
                    </ContainerCsvLoader>
                </form>
            </ContainerCenter>
        </GridContainerD>
    )
}

export default CsvLoader2;