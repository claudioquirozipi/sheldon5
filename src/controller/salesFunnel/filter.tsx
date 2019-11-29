import * as React from 'react';
//Redux
import {useSelector, useDispatch} from 'react-redux';
//Components
import SalesFunnelFilter from '../../view/salesFunnel/filter';

//Herlpers
import {handleFilterOnChange} from '../../helpers/salesFunnel/filterRedux';
import {handleFilterOption} from '../../helpers/salesFunnel/filterOption';
import handleResetLoaderData from '../../helpers/salesFunnel/resetLoaderData';
//Interface
interface iFilterController {
    setNumberView: any; //Función, cambia la vista de los 3 tipos de tablas. 
    modalView: boolean; //Variable, activa y desactiva el modal del filter
    setModalView: any; //función, activar y desactivar el modal del filter
}
interface iSetDataFilter {
    setName?: any;
    setFunnelStatus?: any;
    setCompanySector?: any;
    setCountry?: any;
    setPotentialSize?: any;
}





function FilterController(props: iFilterController) {
    const {setNumberView, modalView, setModalView} = props;
    const dispatch = useDispatch();
    //filter parameter
    const [name, setName] = React.useState("");
    const [funnelStatus, setFunnelStatus] = React.useState([]);
    const [companySector, setCompanySector] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [potentialSize, setPotentialSize] = React.useState([]);
    let setDataFilter: iSetDataFilter= {};
    setDataFilter.setName = setName;
    setDataFilter.setFunnelStatus = setFunnelStatus;
    setDataFilter.setCompanySector = setCompanySector;
    setDataFilter.setCountry = setCountry;
    setDataFilter.setPotentialSize = setPotentialSize;

    //filter opctions
    const[filterOpctionsName, setFilterOpctionsName] = React.useState([]);
    const[filterOpctionsContry, setFilterOpctionsContry] = React.useState([]);
    const[filterOpctionsCompany, setFilterOpctionsCompany] = React.useState([]);
    const token = useSelector( (state:any) => state.user.user.token);
    const filter = useSelector( (state:any) => state.salesFunnelFilter.filter);
    const pageCounter = useSelector((state:any)=>state.salesFunnelLoaderData.pageCounter);

    //Filter Parameter
    React.useEffect(()=>{
        handleFilterOnChange(name, funnelStatus, companySector, country, potentialSize, dispatch);
        handleResetLoaderData(dispatch, token, filter, pageCounter);
    },[name, funnelStatus, companySector, country, potentialSize])
    
    //Filter Opctions
    React.useEffect(()=>{
        handleFilterOption(token,{"name": name} ,setFilterOpctionsName);
    }, [name]);

    React.useEffect(()=>{
        handleFilterOption(token,{"country": country} ,setFilterOpctionsContry);
    }, [country]);

    React.useEffect(()=>{
        handleFilterOption(token,{"sector": companySector} ,setFilterOpctionsCompany);
    }, [companySector]);

    return(
        <SalesFunnelFilter 
            setNumberView={setNumberView}
            setDataFilter={setDataFilter}
            modalView={modalView}
            setModalView={setModalView}
            filterOpctionsName={filterOpctionsName}
            filterOpctionsContry={filterOpctionsContry}
            filterOpctionsCompany={filterOpctionsCompany}
        />
    )
}

export default FilterController;