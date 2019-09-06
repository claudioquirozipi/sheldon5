import * as React from 'react';

//Components
import GridContainerC from '../grid/gridContainerC';
//Compenents-Library
import PageCQ from '../../components/page';
//Styled-Components
import {
    ContainerDownload,
    ContainerTable,
    Table
} from './styled';

//Data
import {data} from './data';
//Assets
import * as imgDownload from '../../assets/img/salesFunnel/download.svg';

function HomeView1() {
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

            <Table>
                <thead>
                    <tr>
                        <th><h2>Funnel Status</h2></th>
                        <th><h2>Last Update</h2></th>
                        <th><h2>Next Action</h2></th>
                        <th><h2>FollowUp</h2></th>
                        <th><h2>DecisionMaker</h2></th>
                        <th><h2>LastName</h2></th>
                        <th><h2>Company Area</h2></th>
                        <th><h2>Company Position</h2></th>
                        <th><h2>Personal Mail</h2></th>
                        <th><h2>Personal CompanyMail</h2></th>
                        <th><h2>CellPhone Whatsapp</h2></th>
                        <th><h2>Skype User</h2></th>
                        <th><h2>HangOut User</h2></th>
                        <th><h2>Linkedin URL</h2></th>
                        <th><h2>Picture URL</h2></th>
                        <th><h2>Facebook URL</h2></th>
                        <th><h2>Instagram URL</h2></th>
                        <th><h2>Interests</h2></th>
                        <th><h2>Sex</h2></th>
                        <th><h2>NSE</h2></th>
                        <th><h2>Birthday</h2></th>
                        <th><h2>Media Consumption</h2></th>
                        <th><h2>Company LinkedIn URL</h2></th>
                        <th><h2>Company Name</h2></th>
                        <th><h2>Potential Size</h2></th>
                        <th><h2>Company Sector</h2></th>
                        <th><h2>Company Products</h2></th>
                        <th><h2>Web URL</h2></th>
                        <th><h2>Company Phone</h2></th>
                        <th><h2>Sucursal Location</h2></th>
                        <th><h2>City</h2></th>
                        <th><h2>State</h2></th>
                        <th><h2>Country</h2></th>
                        <th><h2>NextPurchase Date</h2></th>
                        <th><h2>Satisfaction DM</h2></th>
                        <th><h2>Operator MailID</h2></th>
                        <th><h2>Countable Number</h2></th>
                        <th><h2>DM Countable</h2></th>
                        <th><h2>Personal CountableMail</h2></th>
                        <th><h2>CellPhone Countable</h2></th>
                        <th><h2>Payment Date</h2></th>
                        <th><h2>Frecuency</h2></th>
                        <th><h2>Payment Method</h2></th>
                        <th><h2>Payment Ammount</h2></th>
                        <th><h2>Status Countable</h2></th>
                        <th><h2>Payment Description</h2></th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((data, i )=>{return(
                        <tr key={i}>
                            <td><p>{data.Funnel_Status}</p></td>
                            <td><p>{data.Last_Update}</p></td>
                            <td><p>{data.Next_Action}</p></td>
                            <td><p>{data.FollowUp}</p></td>
                            <td><p>{data.DecisionMaker}</p></td>
                            <td><p>{data.LastName}</p></td>
                            <td><p>{data.Company_Area}</p></td>
                            <td><p>{data.Company_Position}</p></td>
                            <td><p>{data.Personal_Mail}</p></td>
                            <td><p>{data.Personal_CompanyMail}</p></td>
                            <td><p>{data.CellPhone_Whatsapp}</p></td>
                            <td><p>{data.Skype_User}</p></td>
                            <td><p>{data.HangOut_User}</p></td>
                            <td><p>{data.Linkedin_URL}</p></td>
                            <td><p>{data.Picture_URL}</p></td>
                            <td><p>{data.Facebook_URL}</p></td>
                            <td><p>{data.Instagram_URL}</p></td>
                            <td><p>{data.Interests}</p></td>
                            <td><p>{data.Sex}</p></td>
                            <td><p>{data.NSE}</p></td>
                            <td><p>{data.Birthday}</p></td>
                            <td><p>{data.Media_Consumption}</p></td>
                            <td><p>{data.Company_LinkedIn_URL}</p></td>
                            <td><p>{data.Company_Name}</p></td>
                            <td><p>{data.Potential_Size}</p></td>
                            <td><p>{data.Company_Sector}</p></td>
                            <td><p>{data.Company_Products}</p></td>
                            <td><p>{data.Web_URL}</p></td>
                            <td><p>{data.Company_Phone}</p></td>
                            <td><p>{data.Sucursal_Location}</p></td>
                            <td><p>{data.City}</p></td>
                            <td><p>{data.State}</p></td>
                            <td><p>{data.Country}</p></td>
                            <td><p>{data.NextPurchase_Date}</p></td>
                            <td><p>{data.Satisfaction_DM}</p></td>
                            <td><p>{data.Operator_MailID}</p></td>
                            <td><p>{data.Countable_Number}</p></td>
                            <td><p>{data.DM_Countable}</p></td>
                            <td><p>{data.Personal_CountableMail}</p></td>
                            <td><p>{data.CellPhone_Countable}</p></td>
                            <td><p>{data.Payment_Date}</p></td>
                            <td><p>{data.Frecuency}</p></td>
                            <td><p>{data.Payment_Method}</p></td>
                            <td><p>{data.Payment_Ammount}</p></td>
                            <td><p>{data.Status_Countable}</p></td>
                            <td><p>{data.Payment_Description}</p></td>
                        </tr>
                    )})}
                </tbody>
            </Table>
            </ContainerTable>
            </PageCQ>
        </GridContainerC>
    )
}

export default HomeView1;