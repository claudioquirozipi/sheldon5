import handleLoaderPage from './loaderPage';

import {resetDataAcction} from '../../redux/accion/salesFunnel/loaderDataAcction';


export default async function handleResetLoaderData(dispatch:any, token: string, filter: {}, pageCounter: number) {
    const resetData = ()=>dispatch(resetDataAcction());
    
    await resetData();
    await handleLoaderPage(dispatch, token, filter, pageCounter);
}