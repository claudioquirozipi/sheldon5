import handleLoaderPage from './loaderPage';

import {resetDataAcction} from '../../redux/accion/salesFunnel/loaderDataAcction';


export default function handleResetLoaderData(dispatch:any, token: string, filter: {}, pageCounter: number) {
    const resetData = ()=>dispatch(resetDataAcction());
    
    resetData();
    handleLoaderPage(dispatch, token, filter, pageCounter);
}