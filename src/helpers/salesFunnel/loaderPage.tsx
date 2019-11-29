import axios from 'axios';
//Redux
import {loaderDataAcction} from '../../redux/accion/salesFunnel/loaderDataAcction';
 

export default async function handleLoaderPage(dispatch:any, token: string, filter: {}, pageCounter: number) {
    
    const increaseData = (data:[]) => dispatch(loaderDataAcction(data));
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    await axios.post(process.env.API + "find_contacts",{
            "filters": filter,
            "page": pageCounter,
            "limit": 3
        },
        {headers: headers}
    )
    .then(({data}) => {
        increaseData(data.data.contacts)
    })
    .catch((error) => {
        console.log("este es un error",error);
    })
}
