import * as React from 'react';
import {Link, withRouter} from 'react-router-dom';
import fileDownload  from 'js-file-download';

//Compenents
import GridContainerD from '../grid/gridContainerD';

//Components Library
import ContainerCenter from '../../components/modal/containerCenter';
import Button from '../../components/buttons';

//Styled-Components
import {
    ContainerCsvLoader,
    ContainerButtons
} from './styled';

//Assets
import * as img from '../../assets/img/csvLoader/users.svg';

function CsvLoader1(props: any) {
    const {history} = props;
    console.log("csv-loader",history);
    return(
        <GridContainerD>
            <ContainerCenter bgColor="white">
                <ContainerCsvLoader>
                    <img src={img} alt="users"/>
                    <h1>Definamos tu target</h1>
                    <p>
                        Esto funciona así, adjuntas los clientes y Sheldon sabrá todo <br/>
                        sobre ellos para decirte como llegar de manera efectiva. <br/>
                        Si todavía no comprendes <Link to="https://www.youtube.com/">MIRA ESTE VIDEO.</Link>
                    </p>
                    <ContainerButtons>
                        <a onClick={()=> history.push('/csv-loader/2')} href="/" download="sheldon-excel.xlsx">Windows</a>
                        <a onClick={()=> history.push('/csv-loader/2')} href="/" download="hola.txt">IOs</a>
                    </ContainerButtons>
                </ContainerCsvLoader>
            </ContainerCenter>
        </GridContainerD>
    )
}

export default withRouter(CsvLoader1);
