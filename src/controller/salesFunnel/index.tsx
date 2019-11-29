import * as React from 'react';
import SalesFunnelNav from '../../view/salesFunnel/nav';
import SalesFunnelview1 from '../../view/salesFunnel/view1';
import SalesFunnelview2 from '../../view/salesFunnel/view2';
import SalesFunnelview3 from '../../view/salesFunnel/view3';
import axios from 'axios';
//Redux
import {useSelector} from 'react-redux';
//Components
import SalesFunnelModal from '../../view/salesFunnel/modal';
import FilterController from './filter';
//Components-library
import ModalCQ from '../../components/modal/modal';
interface iSalesFunnelNav {
    setNumberView: any;
    setNavFilter: iSetNavFilter;
}
interface iSetNavFilter {
    names?: string;
    funnel_status?: [];
}
interface iNavFilter {
    names?: string;
    funnel_status?: [];
    company_sector?:string;
    country?: string;
}
function handleSendMenssageAxios(e: any, token: string, dataSendMessage: {}, modalView:boolean, setModalView:any) {
    e.preventDefault();
    console.log("handleSendMenssageAxios hola", dataSendMessage);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    axios.post(process.env.API + "campaign_create",
        dataSendMessage    
    ,
        {headers: headers}
    )
    .then(({data}) => {
        console.log("se enviaron los datos correctamente", data);
        setModalView(!modalView);
    })
    .catch((error) => {
        console.log("este es un error",error);
    })
}
function handleAxios(token: string, setIsData: any, navFilter: iNavFilter) {
    // console.log("salesfunel token", token);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    axios.post(process.env.API + "find_contacts",{
            "filters": navFilter,
            "page": 1,
            "limit": 100
        },
        {headers: headers}
    )
    .then(({data}) => {
        // console.log("solicitó los datos con exito",data, navFilter);
        setIsData(data.data.contacts);
    })
    .catch((error) => {
        console.log("este es un error",error);
        setIsData([]);
    })
};

function ControllerSalesFunnel() {
    const token = useSelector( (state:any) => state.user.user.token);
    const [numberView, setNumberView] = React.useState(1);
    const [isData, setIsData] = React.useState([]);
    const [modalView, setModalView] = React.useState(false);
    // React.useEffect(() => {
    //     handleAxios(token, setIsData, navFilter);
    // },[navFilter]);

    return(
        <>
            <FilterController 
                setNumberView={setNumberView} 
                modalView={modalView} 
                setModalView={setModalView}
            />
            <SalesFunnelview1 />
            {numberView==2 && isData.length > 0 ? <SalesFunnelview2 data={isData} /> :null}
            {numberView==3 && isData.length > 0 ? <SalesFunnelview3 data={isData} /> :null}
            <ModalCQ view={modalView}>
                <SalesFunnelModal 
                    modalView={modalView}
                    setModalView={setModalView}
                    handleSendMenssageAxios={handleSendMenssageAxios}
                    token={token}
                />
            </ModalCQ>
        </>
    )
}

export default ControllerSalesFunnel;