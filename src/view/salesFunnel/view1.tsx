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

//Assets
import * as imgDownload from '../../assets/img/salesFunnel/download.svg';

//Interface
interface iHomeView1 {
    data: any[];
}
function HomeView1(props: iHomeView1) {
    const {data} = props;
    console.log("esta es la data" , data);
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
                            <td><p>{data.company_name}</p></td>
                            <td><p>{"Last_Update"}</p></td>
                            <td><p>{"Next_Action"}</p></td>
                            <td><p>{"FollowUp"}</p></td>
                            <td><p>{"DecisionMaker"}</p></td>
                            <td><p>{"LastName"}</p></td>
                            <td><p>{"Company_Area"}</p></td>
                            <td><p>{"Company_Position"}</p></td>
                            <td><p>{"Personal_Mail"}</p></td>
                            <td><p>{"Personal_CompanyMail"}</p></td>
                            <td><p>{"CellPhone_Whatsapp"}</p></td>
                            <td><p>{"Skype_User"}</p></td>
                            <td><p>{"HangOut_User"}</p></td>
                            <td><p>{"Linkedin_URL"}</p></td>
                            <td><p>{"Picture_URL"}</p></td>
                            <td><p>{"Facebook_URL"}</p></td>
                            <td><p>{"Instagram_URL"}</p></td>
                            <td><p>{"Interests"}</p></td>
                            <td><p>{"Sex"}</p></td>
                            <td><p>{"NSE"}</p></td>
                            <td><p>{"Birthday"}</p></td>
                            <td><p>{"Media_Consumption"}</p></td>
                            <td><p>{"Company_LinkedIn_URL"}</p></td>
                            <td><p>{"Company_Name"}</p></td>
                            <td><p>{"Potential_Size"}</p></td>
                            <td><p>{"Company_Sector"}</p></td>
                            <td><p>{"Company_Products"}</p></td>
                            <td><p>{"Web_URL"}</p></td>
                            <td><p>{"Company_Phone"}</p></td>
                            <td><p>{"Sucursal_Location"}</p></td>
                            <td><p>{"City"}</p></td>
                            <td><p>{"State"}</p></td>
                            <td><p>{"Country"}</p></td>
                            <td><p>{"NextPurchase_Date"}</p></td>
                            <td><p>{"Satisfaction_DM"}</p></td>
                            <td><p>{"Operator_MailID"}</p></td>
                            <td><p>{"Countable_Number"}</p></td>
                            <td><p>{"DM_Countable"}</p></td>
                            <td><p>{"Personal_CountableMail"}</p></td>
                            <td><p>{"CellPhone_Countable"}</p></td>
                            <td><p>{"Payment_Date"}</p></td>
                            <td><p>{"Frecuency"}</p></td>
                            <td><p>{"Payment_Method"}</p></td>
                            <td><p>{"Payment_Ammount"}</p></td>
                            <td><p>{"Status_Countable"}</p></td>
                            <td><p>{"Payment_Description"}</p></td>
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