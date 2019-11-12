import * as React from 'react';

//Components
import GridContainerB from '../grid/gridContainerB';



//Styled-Components
import {
    NavContainer,
    LinkContainer,
    NavContainerRight
} from './styled';
import * as img1 from '../../assets/img/salesFunnel/database.svg';
import * as img2 from '../../assets/img/salesFunnel/filter.svg';
import * as img3 from '../../assets/img/salesFunnel/calendar.svg';

//Interface
interface iSalesFunnelNav {
    setNumberView: any;
    setNavFilter: any;
    modalView: boolean;
    setModalView: any;
}
interface iRetorno{
    names?: string;
    company_sector?:string;
    country?: string;
    funnel_status?: string[];
    potential_size?: string[];
}


function handleOnChange(name: string, funnelStatus: string, companySector: string, country: string, potentialSize: string) {
    let retorno:iRetorno= {}
    if(name!== "") {
        retorno.names = name.trim();
    }
    if(companySector !== "") {
        retorno.company_sector = companySector;
    }
    if(country !== "") {
        retorno.country = country;
    }

    if(funnelStatus !== "") {
        retorno.funnel_status = [funnelStatus];
    }
    if(potentialSize !== ""){
        retorno.potential_size = [potentialSize]
    }
    return retorno;
}

function SalesFunnelNav(props : iSalesFunnelNav) {
    const {setNumberView, setNavFilter, modalView, setModalView} = props;
    const [name, setName] = React.useState("");
    const [companySector, setCompanySector] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [funnelStatus, setFunnelStatus] = React.useState("");
    const [potentialSize, setPotentialSize] = React.useState("");

    React.useEffect(() => {
        let resultado = handleOnChange(name, funnelStatus, companySector, country, potentialSize );
        console.log("prueba",resultado);
        setNavFilter(resultado);
    }, [name, companySector, country, funnelStatus, potentialSize]);
    
    return(
        <GridContainerB>
            <NavContainer>
                <LinkContainer>
                    <span onClick={() => setNumberView(1)}><img src={img1} alt=""/></span>
                    <span onClick={() => setNumberView(2)}><img src={img2} alt=""/></span>
                    <span onClick={() => setNumberView(3)}><img src={img3} alt=""/></span>
                </LinkContainer>
                <div>
                    
                    <NavContainerRight>
                        <form>
                            <datalist id="browsers">
                                <option value="" />
                                <option value="Firefox"/>
                                <option value="Internet Explorer"/>
                                <option value="Opera"/>
                                <option value="Safari"/>
                                <option value="Microsoft Edge"/>
                            </datalist>
                            <input placeholder="Name" list="browsers" onChange={(e) => setName(e.target.value)} />
                            <input placeholder="Company sector" list="browsers" onChange={(e) => setCompanySector(e.target.value)} />
                            <input placeholder="Contry" list="browsers" onChange={(e) => setCountry(e.target.value)} />
                            <select 
                                onChange={(e)=>setFunnelStatus(e.target.value)}>
                                <option value="">nada</option>
                                <option value="hola1">hola 1</option>
                                <option value="hola2">hola 2</option>
                                <option value="hola3">hola 3</option>
                            </select>
                            <select 
                                onChange={(e)=>setPotentialSize(e.target.value)}>
                                <option value="">nada</option>
                                <option value="size1">size 1</option>
                                <option value="size2">size 2</option>
                                <option value="size3">size 3</option>
                            </select>
                        </form>
                        <button onClick={()=>setModalView(!modalView)}>Send</button>
                    </NavContainerRight>
                </div>
            </NavContainer>
        </GridContainerB>
    )
}

export default SalesFunnelNav;