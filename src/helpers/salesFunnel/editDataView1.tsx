import axios from 'axios';
//Interface 
interface ipositionAndDataForm {
    top: number;
    left: number;
    id: string;
    className: string;
    data: any;
}
export function handleEditDataView1(
    e: any, 
    id: string, 
    setPositionAndDataForm: any,
    initialData:any[]
) {
    const result = initialData.filter(data => data._id === id);
    setPositionAndDataForm({
        top:e.target.offsetTop, 
        left: e.target.offsetLeft, 
        id:id, 
        className:e.target.className, 
        data: result[0]
    });
}

export function handleEditAxiosDataView1(
    e:any, 
    positionAndDataForm: ipositionAndDataForm, 
    valueForm:string,
    token: string
) {
    e.preventDefault();
    console.log("enviar axios", positionAndDataForm, valueForm);

    let preResult = positionAndDataForm.data;
    preResult[positionAndDataForm.className]= valueForm;
    const result = {
        _id: positionAndDataForm.id,
        contact: preResult
    }
    console.log("resultado ", result, "token", token);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    axios.post(process.env.API + 'update_contact' ,result,
            {headers: headers}
        )
        .then(({data}) => {
            console.log("se editó con exito",data);
        })
        .catch((error) => {
            console.log("este es un error",error);
        });

}

    
 