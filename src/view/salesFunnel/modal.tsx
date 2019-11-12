import * as React from 'react';
//Redux
import {
    useSelector
} from 'react-redux';
//Styled-Components
import {
    ContainerModal,
    ContainerButton,
    DobleInput,
    ContainerInput,
    ImgModal
} from './styled';

//Assets
import * as imgModal from '../../assets/img/salesFunnel/imgModal.svg';

function handleParameters(e:any, setMessge: any, message: string) {
    const newMessage = message +" " + e.target.value + " ";
    e.target.value= "";
    setMessge(newMessage);
    console.log("newMessage", newMessage);
}
function handleDataSendMessage(chanel: string, name: string, subject:string, message: string, items: string[], filters:{}, date: string, time:string ) {
    let SendMessageData: {}
    if(Object.keys(filters).length===0 && items.length===0) {
        SendMessageData = {

            "name": name,
            "chanel": chanel,
            "option": {
                "mode": "all",
                "filters": {}
            },
            "subject": subject,
            "message": message,
            "parameters": [],
            "items": [],
            "trigger": date + "T" + time + ":00.00000"
        }    
    } else if(items.length >0) {
        SendMessageData = {

            "name": name,
            "chanel": chanel,
            "option": {
                "mode": "select",
                "filters": {}
            },
            "subject": subject,
            "message": message,
            "parameters": [],
            "items": items,
            "trigger": date + "T" + time + ":00.00000"
        }
    } else {
        SendMessageData = {

            "name": name,
            "chanel": chanel,
            "option": {
                "mode": "filters",
                "filters": filters
            },
            "subject": subject,
            "message": message,
            "parameters": [],
            "items": [],
            "trigger": date + "T" + time + ":00.00000"
        }
    }

    console.log("filter =0 ", Object.keys(filters).length===0);
    console.log("Send Message Data", SendMessageData,"filters", filters, "items", items, "date time",date, time);
    return SendMessageData;
}
function SalesFunnelModal(props: any) {
    const {modalView, setModalView,handleSendMenssageAxios, token} = props;
    const [dataSendMessage, setDataSendMessage] = React.useState({});

    const [chanel, setChanel]= React.useState("mail");
    const [name, setName] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessge] = React.useState("");
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const filters = useSelector( (state:any) => state.filter.filter);
    const items = useSelector( (state:any) => state.checkboxSelect.checkbox);

    React.useEffect(()=>{
        let data = handleDataSendMessage(chanel, name, subject, message, items, filters, date, time);
        setDataSendMessage(data);
        console.log("sendData", data);
    }, [chanel, name, subject, message, date, time, filters, items]);
    return(
        <ContainerModal>
            <ContainerButton onClick={()=>setModalView(!modalView)}>
                <h1>X</h1>
                <img src="" alt=""/>
            </ContainerButton>
            <ImgModal src={imgModal} alt=""/>
            <form onSubmit={(e)=>handleSendMenssageAxios(e, token, dataSendMessage, modalView, setModalView  )}>
                <h1>ContainerButton</h1>
                <DobleInput>
                    <ContainerInput>
                    <label htmlFor="">Canal</label>
                    <select name="" id="" onChange={(e)=>setChanel(e.target.value)}>
                        <option defaultValue="mail" value="mail" >Mail</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="linkedin">Linkedin</option>
                    </select>
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="SendMailInputName">Name</label>
                        <input type="text" name="" id="SendMailInputName" onChange={(e)=>setName(e.target.value)}/>
                    </ContainerInput>
                </DobleInput>
                <DobleInput>
                    <ContainerInput>
                        <label htmlFor="">Set date</label>
                        <input type="date" name="" id="" onChange={(e)=>setDate(e.target.value)}/>
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="">Set time</label>
                        <input type="time" name="" id="" onChange={(e) => setTime(e.target.value)}
                            max="24:00"
                        />
                        
                    </ContainerInput>
                </DobleInput>
                <ContainerInput>
                    <label htmlFor="">subject</label>
                    <input type="text" name="" id="" onChange={(e)=>setSubject(e.target.value)}/>

                </ContainerInput>

                <div>
                    <label htmlFor="">Presets</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="Presets 1">Presets 1</option>
                        <option value="Presets 2">Presets 2</option>
                    </select>
                    <label htmlFor="">Parameters</label>
                    <select name="" id="" onChange={(e)=>handleParameters(e, setMessge, message)}>
                        <option value=""></option>
                        <option value="Parameters 1">Parameters 1</option>
                        <option value="Parameters 2">Parameters 2</option>
                    </select>
                </div>
                <ContainerInput>
                    <label htmlFor="">Message</label>
                    <textarea 
                        name="" 
                        id=""  
                        rows={10} 
                        value={message}
                        onChange={(e)=>setMessge(e.target.value)}
                    >
                    </textarea>
                </ContainerInput>
            
                <div>
                    <input type="checkbox" name="" id="sendMe"/>
                    <label htmlFor="sendMe">Send me a test before</label>
                </div>
                <p>Se enviará un test a los colaboradores de la empresa</p>
                <input type="submit" value="Enviar"/>
                
            </form>
        </ContainerModal>

    )
}

export default SalesFunnelModal;