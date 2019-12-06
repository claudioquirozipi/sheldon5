import * as React from 'react';
//Redux 
import {useSelector, useDispatch} from 'react-redux';
import {checkboxSelectAction} from '../../redux/accion/checkbox';
import {orderByAcction} from '../../redux/accion/salesFunnel/loaderDataAcction';
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
function handleOrderBy(e: any, orderBy: string, setOrderBy: any, dispatch: any ) {
    setOrderBy(e.target.value);
    console.log("order by", e.target.value);
    const orderByRedux = (filterOrderBy:string)=>dispatch(orderByAcction(filterOrderBy));
    orderByRedux(e.target.value);
}
function HomeView1(props: iHomeView1) {
    const [value, setValue] = React.useState([]);
    const [viewSubFilter, setViewSubFilter] = React.useState("1");
    const [orderBy, setOrderBy] = React.useState("1");
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
    const [positionAndDataForm, setPositionAndDataForm] = React.useState({
        top: 50, 
        left: 50, 
        id:"", 
        className:"", 
        data:{}, 
        type:{
            text: false, 
            textarea: false,
            email: false,
            date: false,
            selectMultipleSimple: false,
            selectMultiple: false
        },
        options: []
    });
    
    return(
        <GridContainerC>
            <ContainerDownload>
                <h2>Contactos en lista:<span> {initialData.length}</span></h2>
                <h4>Order by: {orderBy}</h4>
                <select name="" id="" onChange={(e)=>handleOrderBy(e,orderBy, setOrderBy, dispatch)}>
                    <option value="lastname">Last date update</option>
                    <option value="decisionmaker">Nombre y Apellido</option>
                    <option value="decisionmaker">Status</option>
                    <option value="decisionmaker">FollowUp</option>
                    <option value="decisionmaker">Next action</option>
                </select>
                <h4>table: {viewSubFilter}</h4>
                <select name="" id="" onChange={(e)=>setViewSubFilter(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <div>
                    <img src={imgDownload}/>
                    <h3>Download contacts</h3>
                </div>
            </ContainerDownload>
            <PageCQ>
                <View1Form positionAndDataForm={positionAndDataForm} token={token}/>
                <ContainerTable>
                    <table>
                    
                    <thead>
                    <tr>
                        {viewSubFilter==="1" ?<>
                            <th>checkbox</th>
                            <th>Funnel Status</th>
                            <th>Last Update</th>
                            <th>Next Action</th>
                            <th>FollowUp</th>
                        </>:null }
                        {viewSubFilter==="2" ?<>
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
                        </>:null}
                        {viewSubFilter==="3" ?<>
                            <th>Company LinkedIn URL</th>
                            <th>Company Name</th>
                            <th>Potential Size</th>
                            <th>Company Sector</th>
                            <th>Company Products</th>
                            <th>Web URL</th>
                            <th>Company Phone</th>
                        </>:null}
                        {viewSubFilter==="4" ?<>
                            <th>Sucursal Location</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                        </>:null}
                        {viewSubFilter==="5" ?<>
                            <th>Frecuency</th>
                            <th>Satisfaction DM</th>
                            <th>Operator MailID</th>
                        </>:null}
                        {viewSubFilter==="6" ?<>
                            <th>Countable Number</th>
                            <th>DM Countable</th>
                            <th>Personal CountableMail</th>
                            <th>CellPhone Countable</th>
                            <th>Payment Date</th>
                            <th>Payment Method</th>
                            <th>Payment Ammount</th>
                            <th>Status Countable</th>
                            <th>Payment Description</th>
                            <th>NextPurchase Date</th>
                        </>:null}
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
                            {viewSubFilter==="1" ?<>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        id={data._id} 
                                        onChange={(e) => handleChange(e,value, setValue)}
                                        />
                                </td>
                                <td className="funnel_status">{data.funnel_status}</td>
                                {/* <td className="Last_Update">{"Last_Update"}</td> */}
                                {/* <td className="Next_Action">{"Next_Action"}</td> */}
                                {/* <td className="FollowUp">{"FollowUp"}</td> */}
                            </>:null}
                            {viewSubFilter==="2" ?<>
                                <td className="decisionmaker">{data.decisionmaker}</td>
                                <td className="lastname">{data.lastname}</td>
                                <td className="company_area">{data.company_area}</td>
                                <td className="company_position">{data.company_position}</td>
                                <td className="personal_mail">{data.personal_mail}</td>
                                <td className="personal_companymail">{data.personal_companymail}</td>
                                <td className="cellphone_whatsapp">{data.cellphone_whatsapp}</td>
                                <td className="skype_user">{data.skype_user}</td>
                                <td className="hangout_user">{data.hangout_user}</td>
                                <td className="linkedin_url">{data.linkedin_url}</td>
                                <td className="picture_url">{data.picture_url}</td>
                                <td className="facebook_url">{data.facebook_url}</td>
                                <td className="instagram_url">{data.instagram_url}</td>
                                <td className="interests">{data.interests.map((h:string,i:number)=>{return(<span key={i}>{h}</span>)})}</td>
                                <td className="sex">{data.sex}</td>
                                <td className="nse">{data.nse}</td>
                                <td className="birthday">{data.birthday}</td>
                                <td className="media_consumption">{data.media_consumption.map((h:string,i:number)=>(<span key={i}>{h}</span>))}</td>
                            </>:null}
                            {viewSubFilter==="3" ?<>
                                <td className="company_linkedin_url">{data.company_linkedin_url}</td>
                                <td className="company_name">{data.company_name}</td>
                                <td className="potential_size">{data.potential_size}</td>
                                <td className="company_sector">{data.company_sector}</td>
                                <td className="company_products">{data.company_products}</td>
                                <td className="web_url">{data.web_url}</td>
                                <td className="company_phone">{data.company_phone}</td>
                            </>:null}
                            {viewSubFilter==="4" ?<>
                                <td className="sucursal_location">{data.sucursal_location}</td>
                                <td className="city">{data.city}</td>
                                <td className="state">{data.state}</td>
                                <td className="country">{data.country}</td>
                            </>:null}
                            {viewSubFilter==="5" ?<>
                                <td className="frecuency">{data.frecuency}</td>
                                <td className="satisfaction_dm">{data.satisfaction_dm}</td>
                                <td className="operator_mailid">{data.operator_mailid}</td>
                            </>:null}
                            {viewSubFilter==="6" ?<>
                                <td className="countable_number">{data.countable_number}</td>
                                <td className="dm_countable">{data.dm_countable}</td>
                                <td className="personal_companymail">{data.personal_companymail}</td>
                                <td className="cellphone_countable">{data.cellphone_countable}</td>
                                <td className="payment_date">{data.payment_date}</td>
                                <td className="payment_method">{data.payment_method}</td>
                                <td className="payment_ammount">{data.payment_ammount}</td>
                                <td className="status_countable">{data.status_countable}</td>
                                <td className="payment_description">{data.payment_description}</td>
                                <td className="nextpurchase_date">{data.nextpurchase_date}</td>
                            </>:null}
                        </tr>
                    )})}
                </tbody>
                </table>
                </ContainerTable>
                <button onClick={()=>handleLoaderPage(dispatch, token, filter, pageCounter)}>Cargar más</button>
                <button onClick={()=>handleResetLoaderData(dispatch, token, filter, pageCounter)}>reset loader</button>
            </PageCQ>
        </GridContainerC>
    )
}

export default HomeView1;