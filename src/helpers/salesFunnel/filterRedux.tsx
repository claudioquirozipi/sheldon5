import {filterOnChageAcction} from '../../redux/accion/salesFunnel/filterAccion';

interface ifilter{
    names?: string;
    company_sector?:string;
    country?: string;
    funnel_status?: string[];
    potential_size?: string[];
}

export function handleFilterOnChange(name: string, funnelStatus: string[], companySector: string, country: string, potentialSize: string[], dispatch: any) {

    
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
}