import axios from 'axios';

export function handleFilterOption(token: string, value: {}, setFilter: any) {
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