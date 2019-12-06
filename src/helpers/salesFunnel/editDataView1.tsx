import axios from 'axios';
//Interface 
interface ipositionAndDataForm {
    top: number;
    left: number;
    id: string;
    className: string;
    data: any;
    options: string[];
}
interface iclassNameType {
    textarea: boolean;
    text: boolean;
    email: boolean;
    date: boolean;
    selectMultipleSimple: boolean;
    selectMultiple: boolean;
}
//Esta función se ejecuta al hacer click en un dato de la tabla view1
export function handleEditDataView1(
    e: any, 
    id: string, 
    setPositionAndDataForm: any,
    initialData:any[]
) {
    //variables para el paso siguiente. 
    let classNameType: iclassNameType= {
        text: false, 
        textarea: false,
        email: false,
        date: false,
        selectMultipleSimple: false,
        selectMultiple: false
    };
    const classN: string = e.target.className;
    //Seleciona el tipo de formulario para los diferentes tipos de campos. 
    if(classN ==="payment_description") {
        classNameType.textarea = true;
    }else if(classN === "personal_mail" ||
        classN === "personal_companymail" ||
        classN === "hangout_user" ||
        classN === "operator_mailid" ||
        classN === "personal_companymail"
    ) {
        classNameType.email = true
    }
    else if(classN ==="FollowUp" ||
        classN === "birthday" ||
        classN === "frecuency" ||
        classN === "payment_date"
    ) {
        classNameType.date = true
    }else if(
        classN ==="funnel_status" ||
        classN ==="Next_Action" ||
        classN ==="company_area" ||
        classN === "company_position" ||
        classN === "sex" ||
        classN === "nse" ||
        classN === "potential_size" ||
        classN === "company_sector" ||
        classN === "satisfaction_dm" ||
        classN === "payment_method" ||
        classN === "status_countable"
    ) {
        classNameType.selectMultipleSimple = true
    }else if(classN ==="interests" ||
        classN === "media_consumption" ) {
        classNameType.selectMultiple = true
    } else {
        classNameType.text = true;
    }
    //Agregar las opciones según el tipo de campo
    let newOptions:string[] = [];
    switch (classN) {
        case "funnel_status":
            newOptions = [
                "Lost Client",
                "Doesn't know us (prospect)",
                "Contacted, visualized & no respond",
                "Clicked & no respond",
                "Need response",
                "No need yet",
                "Not target",
                "Lead - Need be contacted",
                "Capted lead - Icon Linkedin",
                "Capted lead - Icon Site name",
                "Capted lead - Icon Google",
                "Capted lead - Icon Newsletter",
                "Lead - Need Info",
                "Need quotation",
                "Analyzing Quotation",
                "Lost for Price",
                "Lost for Budget",
                "Lost for Quality",
                "Lost for Conditions",
                "Close Deal (facturado)",
                "Received product/service (optional)",
                "Loyal Clients",
                "Neutral Clients",
                "Birthday",
                "Purchase followup",
                "Survey",
                "Need to pay",
            ];
            break;
        case "Next_Action":
            newOptions = [
                "Email",
                "Phone Call",
                "Visit",
                "Video Meeting",
                "Linkedin Inbox",
                "Whatsapp Inbox",
            ]
            break;
        case "company_area":
            newOptions = [
                "Marketing",
                "Product / Service",
                "Mainteance",
                "Administration",
                "Financial",
                "Executive",
                "Systems / Technology",
                "Sales / Commercial"
            ]
            break;
        case "company_position": 
            newOptions = [
                "Chief",
                "Manager",
                "Asistant"
            ]
            break;
        case "sex": 
            newOptions = [
                "Male",
                "Female"
            ]
            break;
        case "nse":
            newOptions = [
                "Regular",
                "Medium",
                "High",
                "Low"
            ]
            break;
        case "potential_size":
            newOptions = [
                "Entrepreneur",
                "Startup",
                "Medium Company",
                "Big Company",
                "Corporation"
            ]
            break;
        case "company_sector":
            newOptions = [
                "AgroIndustrial",
                "Software", 
                "Marketing",
                "Financial",
                "Banks"
            ]
            break;
        case "satisfaction_dm":
            newOptions = [
                "Recomend us",
                "Neutral",
                "Not Satisfied",
                "Lost"
            ]
            break;
        case "payment_method":
            newOptions = [
                "BankTransfer",
                "Cash",
                "App (paypal)",
                "Check"
            ]
            break;
        case "status_countable":
            newOptions = [
                "Delayed",
                "Paid",
                "Invoice send"
            ]
            break;
        case "interests": 
            newOptions = [
                "Football", 
                "Golf", 
                "Cars"
            ]
            break;
        default: 
            break;
            
    }

    //elige un dato según el id, para luego ser editado. 
    const result = initialData.filter(data => data._id === id);
    setPositionAndDataForm({
        top:e.target.offsetTop, 
        left: e.target.offsetLeft, 
        id:id, 
        className:e.target.className, 
        data: result[0],
        type: classNameType,
        options: newOptions
    });
}


//Hace llamado al axios para editar los datos del formulario. 
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

    
 