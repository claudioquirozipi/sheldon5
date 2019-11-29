import * as React from 'react';
//Redux 
import {useSelector, useDispatch} from 'react-redux';
import {checkboxSelectAction} from '../../redux/accion/checkbox';
//Helpers
import handleLoaderPage from '../../helpers/salesFunnel/loaderPage';
import handleResetLoaderData from '../../helpers/salesFunnel/resetLoaderData';
import {handleEditDataView1} from '../../helpers/salesFunnel/editDataView1';
//Components
import GridContainerC from '../grid/gridContainerC';
import View1Form from './view1Form';
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
    const [value, setValue] = React.useState([]);
    //Redux
    const dispatch = useDispatch();
    const token = useSelector( (state:any) => state.user.user.token);
    const filter = useSelector( (state:any) => state.salesFunnelFilter.filter);
    const pageCounter = useSelector((state:any)=>state.salesFunnelLoaderData.pageCounter);
    const initialData = useSelector((state:any) => state.salesFunnelLoaderData.loaderData);
    const checkboxSelect = (checkboxS:string[]) => dispatch(checkboxSelectAction(checkboxS))
    React.useEffect(()=> {
        checkboxSelect(value);
        console.log("ocurrión un cambio en value",value);
    }, [value]);

    //Variables Form
    const [positionAndDataForm, setPositionAndDataForm] = React.useState({top: 50, left: 50, id:"", className:"", data:{}});
    
    return(
        <GridContainerC>
            <ContainerDownload>
                <h2>Contactos en lista:<span> {initialData.length}</span></h2>
                <div>
                    <img src={imgDownload}/>
                    <h3>Download contacts</h3>
                </div>
            </ContainerDownload>
            <PageCQ>
                <View1Form positionAndDataForm={positionAndDataForm} token={token}/>
                <table>
                    <thead>
                    <tr>
                            <th>checkbox</th>
                            <th>Funnel Status</th>
                            {/* <th>Last Update</th> */}
                            {/* <th>Next Action</th> */}
                            {/* <th>FollowUp</th> */}
                            <th>DecisionMaker</th>
                            <th>LastName</th>
                            <th>Company Area</th>
                            <th>Company Position</th>
                            <th>Personal Mail</th>
                            <th>Personal CompanyMail</th>
                            <th>CellPhone Whatsapp</th>
                            <th>Skype User</th>
                            <th>HangOut User</th>
                            <th>Linkedin URL</th>
                            <th>Picture URL</th>
                            <th>Facebook URL</th>
                            <th>Instagram URL</th>
                            <th>Interests</th>
                            <th>Sex</th>
                            <th>NSE</th>
                            <th>Birthday</th>
                            <th>Media Consumption</th>
                            <th>Company LinkedIn URL</th>
                            <th>Company Name</th>
                            <th>Potential Size</th>
                            <th>Company Sector</th>
                            <th>Company Products</th>
                            <th>Web URL</th>
                            <th>Company Phone</th>
                            <th>Sucursal Location</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>NextPurchase Date</th>
                            <th>Satisfaction DM</th>
                            <th>Operator MailID</th>
                            <th>Countable Number</th>
                            <th>DM Countable</th>
                            <th>Personal CountableMail</th>
                            <th>CellPhone Countable</th>
                            <th>Payment Date</th>
                            <th>Frecuency</th>
                            <th>Payment Method</th>
                            <th>Payment Ammount</th>
                            <th>Status Countable</th>
                            <th>Payment Description</th>
                    </tr>  
                    </thead>
                    <tbody>
                    {initialData.map((data: any, i:number )=>{return(
                        
                        <tr 
                            key={i} 
                            onClick={(e)=>handleEditDataView1(
                                e, 
                                data._id, 
                                setPositionAndDataForm, 
                                initialData
                        )}>
                            <td>
                                <input 
                                    type="checkbox" 
                                    id={data._id} 
                                    onChange={(e) => handleChange(e,value, setValue)}
                                />
                            </td>
                            <td>{data.funnel_status}</td>
                            {/* <td>{"Last_Update"}</td> */}
                            {/* <td>{"Next_Action"}</td> */}
                            {/* <td>{"FollowUp"}</td> */}
                            <td className="decisionmaker">{data.decisionmaker}</td>
                            <td>{data.lastname}</td>
                            <td>{data.company_area}</td>
                            <td>{data.company_position}</td>
                            <td>{data.personal_mail}</td>
                            <td>{data.personal_companymail}</td>
                            <td>{data.cellphone_whatsapp}</td>
                            <td>{data.skype_user}</td>
                            <td>{data.hangout_user}</td>
                            <td>{data.linkedin_url}</td>
                            <td>{data.picture_url}</td>
                            <td>{data.facebook_url}</td>
                            <td>{data.instagram_url}</td>
                            <td>{data.interests.map((h:string,i:number)=>{return(<span key={i}>{h}</span>)})}</td>
                            <td>{data.sex}</td>
                            <td>{data.nse}</td>
                            <td>{data.birthday}</td>
                            <td>{data.media_consumption.map((h:string,i:number)=>(<span key={i}>{h}</span>))}</td>
                            <td>{data.company_linkedin_url}</td>
                            <td>{data.company_name}</td>
                            <td>{data.potential_size}</td>
                            <td>{data.company_sector}</td>
                            <td>{data.company_products}</td>
                            <td>{data.web_url}</td>
                            <td>{data.company_phone}</td>
                            <td>{data.sucursal_location}</td>
                            <td>{data.city}</td>
                            <td>{data.state}</td>
                            <td>{data.country}</td>
                            <td>{data.nextpurchase_date}</td>
                            <td>{data.satisfaction_dm}</td>
                            <td>{data.operator_mailid}</td>
                            <td>{data.countable_number}</td>
                            <td>{data.dm_countable}</td>
                            <td>{data.personal_companymail}</td>
                            <td>{data.cellphone_countable}</td>
                            <td>{data.payment_date}</td>
                            <td>{data.frecuency}</td>
                            <td>{data.payment_method}</td>
                            <td>{data.payment_ammount}</td>
                            <td>{data.status_countable}</td>
                            <td>{data.payment_description}</td>
                        </tr>
                    )})}
                </tbody>
                </table>
                <button onClick={()=>handleLoaderPage(dispatch, token, filter, pageCounter)}>Cargar más</button>
                <button onClick={()=>handleResetLoaderData(dispatch, token, filter, pageCounter)}>reset loader</button>
            </PageCQ>
        </GridContainerC>
    )
}

export default HomeView1;