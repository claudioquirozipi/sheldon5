import * as React from 'react';
import axios from 'axios';
//Redux
import {useSelector, useDispatch} from 'react-redux';
//Components
import SalesFunnelFilter from '../../view/salesFunnel/filter';

//Actions 
import {
    filterOnChageAcction,
} from '../../redux/accion/filterAccion';
//Interface
interface iFilterController {
    setNumberView: any;
    modalView: boolean;
    setModalView: any;
    setNavFilter: any;
}
interface iSetDataFilter {
    setName?: any;
    setFunnelStatus?: any;
    setCompanySector?: any;
    setCountry?: any;
    setPotentialSize?: any;
}
interface ifilter{
    names?: string;
    company_sector?:string;
    country?: string;
    funnel_status?: string[];
    potential_size?: string[];
}

function handleFilterOption(token: string, value: {}, setFilter: any) {
    console.log("Filter rafa");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
   
    axios.post(process.env.API + 'suggest_contacts',
            value,
            {headers: headers}
        )
        .then(({data}) => {
            console.log("se buscaron las option con exito rafa",data);
            setFilter(data.data);
        })
        .catch((error) => {
            console.log("este es un error de las option",error);            
        });
}

function handleFilterOnChange(name: string, funnelStatus: string[], companySector: string, country: string, potentialSize: string[], dispatch: any) {

    
    const filterOnchage = (filter:{})=>dispatch(filterOnChageAcction(filter));
    
    
    let filter:ifilter= {}
    if(name!== "") {
        filter.names = name.trim();
    }
    if(companySector !== "") {
        filter.company_sector = companySector;
    }
    if(country !== "") {
        filter.country = country;
    }

    if(funnelStatus.length > 0) {
        filter.funnel_status = funnelStatus;
    }
    if(potentialSize.length > 0){
        filter.potential_size = potentialSize
    }
    console.log("este esl el filter", filter);
    filterOnchage(filter);
    return filter;
}
function FilterController(props: iFilterController) {
    const {setNumberView, modalView, setModalView, setNavFilter} = props;
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
    React.useEffect(()=>{
        const filter = handleFilterOnChange(name, funnelStatus, companySector, country, potentialSize, dispatch);
        setNavFilter(filter);
    },[name, funnelStatus, companySector, country, potentialSize])
    React.useEffect(()=>{
        
        handleFilterOption(token,{"name": name} ,setFilterOpctionsName);
        console.log("hola. data filter option, name", filterOpctionsName);
    }, [name]);
    React.useEffect(()=>{
        
        handleFilterOption(token,{"country": country} ,setFilterOpctionsContry);
        console.log("hola. data filter option, name", filterOpctionsContry);
    }, [country]);
    React.useEffect(()=>{
        
        handleFilterOption(token,{"sector": companySector} ,setFilterOpctionsCompany);
        console.log("hola. data filter option, sector", filterOpctionsCompany);
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