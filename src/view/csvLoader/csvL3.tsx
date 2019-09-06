import * as React from 'react';

//Compenents
import GridContainerD from '../grid/gridContainerD';

//Components Library
import ContainerCenter from '../../components/modal/containerCenter';
import Button from '../../components/buttons';

//Styled-Components
import {
    ContainerCsvLoader
} from './styled';

//Assets
function Img() {
    return(
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
    )
}

function CsvLoader3() {
    return(
        <GridContainerD>
            <ContainerCenter bgColor="white">
            <ContainerCsvLoader>
                    <Img />
                    <h1>Procesando tu clientes</h1>
                    <p>
                        Aguarda unos minutos mientras Sheldon analiza <br/>
                        y procesa toda tu base de datos.
                    </p>
                    <Button text="Entendido" bgColor="#3FC180" disable={false}/>
                </ContainerCsvLoader>
            </ContainerCenter>
        </GridContainerD>
    )
}

export default CsvLoader3;