import * as React from 'react';
//Redux 
import {useDispatch} from 'react-redux';
import {checkboxSelectAction} from '../../redux/accion/checkbox';
//Components
import GridContainerC from '../grid/gridContainerC';
//Compenents-Library
import PageCQ from '../../components/page';
//Styled-Components
import {
    ContainerDownload,
    ContainerTable,
    ColumnTable,
    ColumnForm
} from './styled';

//Assets
import * as imgDownload from '../../assets/img/salesFunnel/download.svg';

//Interface
interface iHomeView1 {
    data: any[];
}

function handleChange(e:any,value: string[], setValue: any) {
    if(e.target.checked) {
        const returnValue = [...value, e.target.id]
        setValue(returnValue);        
    } else {
        const returnValue = [...value].filter((val) => val!== e.target.id);
        setValue(returnValue);
    }
}
function HomeView1(props: iHomeView1) {
    const {data} = props;
    const [value, setValue] = React.useState([]);
    const dispatch = useDispatch();
    const checkboxSelect = (checkboxS:string[]) => dispatch(checkboxSelectAction(checkboxS))
    console.log("esta es la data", data);
    React.useEffect(()=> {
        checkboxSelect(value);
        console.log("ocurrión un cambio en value",value);
    }, [value]);
    return(
        <GridContainerC>
            <ContainerDownload>
                <h2>Contactos en lista:<span> {data.length}</span></h2>
                <div>
                    <img src={imgDownload}/>
                    <h3>Download contacts</h3>
                </div>
            </ContainerDownload>
            <PageCQ>
            <ContainerTable>
                <ColumnTable>
                        <h2>checkbox</h2>
                        <h2>Funnel Status</h2>
                        {/* <h2>Last Update</h2> */}
                        {/* <h2>Next Action</h2> */}
                        {/* <h2>FollowUp</h2> */}
                        <h2>DecisionMaker</h2>
                        <h2>LastName</h2>
                        <h2>Company Area</h2>
                        <h2>Company Position</h2>
                        <h2>Personal Mail</h2>
                        <h2>Personal CompanyMail</h2>
                        <h2>CellPhone Whatsapp</h2>
                        <h2>Skype User</h2>
                        <h2>HangOut User</h2>
                        <h2>Linkedin URL</h2>
                        <h2>Picture URL</h2>
                        <h2>Facebook URL</h2>
                        <h2>Instagram URL</h2>
                        <h2>Interests</h2>
                        <h2>Sex</h2>
                        <h2>NSE</h2>
                        <h2>Birthday</h2>
                        <h2>Media Consumption</h2>
                        <h2>Company LinkedIn URL</h2>
                        <h2>Company Name</h2>
                        <h2>Potential Size</h2>
                        <h2>Company Sector</h2>
                        <h2>Company Products</h2>
                        <h2>Web URL</h2>
                        <h2>Company Phone</h2>
                        <h2>Sucursal Location</h2>
                        <h2>City</h2>
                        <h2>State</h2>
                        <h2>Country</h2>
                        <h2>NextPurchase Date</h2>
                        <h2>Satisfaction DM</h2>
                        <h2>Operator MailID</h2>
                        <h2>Countable Number</h2>
                        <h2>DM Countable</h2>
                        <h2>Personal CountableMail</h2>
                        <h2>CellPhone Countable</h2>
                        <h2>Payment Date</h2>
                        <h2>Frecuency</h2>
                        <h2>Payment Method</h2>
                        <h2>Payment Ammount</h2>
                        <h2>Status Countable</h2>
                        <h2>Payment Description</h2>
                </ColumnTable>  
                    

                {data.map((data, i )=>{return(
                    <ColumnForm key={i}>
                        <p>
                            <input 
                                type="checkbox" 
                                id={data._id} 
                                onChange={(e) => handleChange(e,value, setValue)}
                            />
                        </p>
                        <p>{data.funnel_status}</p>
                        {/* <p>{"Last_Update"}</p> */}
                        {/* <p>{"Next_Action"}</p> */}
                        {/* <p>{"FollowUp"}</p> */}
                        <p>{data.decisionmaker}</p>
                        <p>{data.lastname}</p>
                        <p>{data.company_area}</p>
                        <p>{data.company_position}</p>
                        <p>{data.personal_mail}</p>
                        <p>{data.personal_companymail}</p>
                        <p>{data.cellphone_whatsapp}</p>
                        <p>{data.skype_user}</p>
                        <p>{data.hangout_user}</p>
                        <p>{data.linkedin_url}</p>
                        <p>{data.picture_url}</p>
                        <p>{data.facebook_url}</p>
                        <p>{data.instagram_url}</p>
                        <p>{data.interests.map((h:string,i:number)=>{return(<span key={i}>{h}</span>)})}</p>
                        <p>{data.sex}</p>
                        <p>{data.nse}</p>
                        <p>{data.birthday}</p>
                        <p>{data.media_consumption.map((h:string,i:number)=>(<span key={i}>{h}</span>))}</p>
                        <p>{data.company_linkedin_url}</p>
                        <p>{data.company_name}</p>
                        <p>{data.potential_size}</p>
                        <p>{data.company_sector}</p>
                        <p>{data.company_products}</p>
                        <p>{data.web_url}</p>
                        <p>{data.company_phone}</p>
                        <p>{data.sucursal_location}</p>
                        <p>{data.city}</p>
                        <p>{data.state}</p>
                        <p>{data.country}</p>
                        <p>{data.nextpurchase_date}</p>
                        <p>{data.satisfaction_dm}</p>
                        <p>{data.operator_mailid}</p>
                        <p>{data.countable_number}</p>
                        <p>{data.dm_countable}</p>
                        <p>{data.personal_companymail}</p>
                        <p>{data.cellphone_countable}</p>
                        <p>{data.payment_date}</p>
                        <p>{data.frecuency}</p>
                        <p>{data.payment_method}</p>
                        <p>{data.payment_ammount}</p>
                        <p>{data.status_countable}</p>
                        <p>{data.payment_description}</p>
                    </ ColumnForm>
                )})}
            </ContainerTable>
            </PageCQ>
        </GridContainerC>
    )
}

export default HomeView1;