import * as React from 'react';
import SalesFunnelNav from '../../view/salesFunnel/nav';
import SalesFunnelview1 from '../../view/salesFunnel/view1';
import SalesFunnelview2 from '../../view/salesFunnel/view2';
import SalesFunnelview3 from '../../view/salesFunnel/view3';
import axios from 'axios';
//Redux
import {useSelector} from 'react-redux';


function handleAxios(token: string, setIsData: any) {
    console.log("salesfunel token", token);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    axios.post(process.env.API + "find_contacts",{
            "filters": {},
            "page": 1,
            "limit": 10
        },
        {headers: headers}
    )
    .then(({data}) => {
        console.log("solicitó los datos con exito",data);
        setIsData(data.data.contacts);
    })
    .catch((error) => {
        console.log("este es un error",error);
        setIsData(null);
    })
};

function ControllerSalesFunnel() {
    const [numberView, setNumberView] = React.useState(1);
    const [isData, setIsData] = React.useState(null);
    const token = useSelector( (state:any) => state.user.user.token);
    React.useEffect(() => {
        handleAxios(token, setIsData);
    },[]);
    return(
        <>
            <SalesFunnelNav setNumberView={setNumberView}/>
            {numberView==1 && isData ? <SalesFunnelview1 data={isData} /> :null}
            {numberView==2 && isData ? <SalesFunnelview2 data={isData} /> :null}
            {numberView==3 && isData ? <SalesFunnelview3 data={isData} /> :null}
        </>
    )
}

export default ControllerSalesFunnel;