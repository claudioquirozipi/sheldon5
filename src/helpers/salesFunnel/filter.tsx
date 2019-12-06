import axios from 'axios';

export async function handleFilterOption(token:string, key:string, value:string, setOptons: any) {   
    let keyValue: {}
    switch(key) {
        case "name":
            keyValue = {name: value}
            break;
        case "country":
            keyValue = {country: value}
            break;
        case "sector":
            keyValue = {sector: value}
            break;
        default : 
            keyValue = {a:2}
    }
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    axios.post(process.env.API + 'suggest_contacts',
            keyValue,
            {headers: headers}
        )
        .then(({data}) => {
            let newData: any[] = [];
            data.data.map((dato: any)=> {
                newData.push(dato[key]);
            })
            console.log( newData)
            setOptons(newData);
        })
        .catch((error) => {
            console.log("No se pudieron conseguuir las opcions",error);            
        });
}