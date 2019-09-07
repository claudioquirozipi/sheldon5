import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import GridContainer from '../view/grid/gridContainer';
//Components
import Nav from '../view/nav/nav';
import ControllerHome from '../controller/home';
import ControllerLogin from '../controller/login';

import ControllerSingUp from '../controller/login/singUp';
import NewPassword from '../view/login/newPassword';
import ControllerCsvLoader from '../controller/csvLoader';
import RecoverPassword from '../view/login/recoverPassword';
//App Components
import SalesFunnelNav from '../view/salesFunnel/nav';
import SalesFunnelview1 from '../view/salesFunnel/view1';
import SalesFunnelview2 from '../view/salesFunnel/view2';
import SalesFunnelview3 from '../view/salesFunnel/view3';
import DashBoard from '../view/dashBoard';
import CommunicationFlow from '../view/communicationFlow';
import OpenData from '../view/openData';
import LeadGenerator from '../view/LeadGenerator';
import MediaPlaning from '../view/mediaPlaning';
import StaffAugmentation from '../view/staffAugmentation';
//Admin Components 
import MyProfile from '../view/myProfile';
import IntegrationsNav from '../view/integrations/nav';
import MailIntegrations from '../view/integrations/mail';
import LinkedinIntegrations from '../view/integrations/linkedin';
import WhatsappIntegrations from '../view/integrations/whatsapp';
import CallsIntegrations from '../view/integrations/calls';
import CalendarIntegrations from '../view/integrations/calendar';
import OthersIntegrations from '../view/integrations/others';
import Billing from '../view/billing';
import support from '../view/support';

//Nav test
import NavTest from './navtest';


function MyRoutes() {
    return (
        <Router>
                <GridContainer>
                    <NavTest />
                    <Nav />

                    <Route path="/login" component={ControllerLogin}/>
                    <Route path="/singup" component={ControllerSingUp} />     
                    <Route path="/recoverpassword" component={RecoverPassword} />     
                    <Route path="/newpassword" component={NewPassword} />
                    <Route path="/csv-loader" component={ControllerCsvLoader} />  
                    {/* App */}
                    <Route path="/sales-funnel" component={SalesFunnelNav} />            
                    <Route path="/sales-funnel/1" component={SalesFunnelview1} />      
                    <Route path="/sales-funnel/2" component={SalesFunnelview2} />      
                    <Route path="/sales-funnel/3" component={SalesFunnelview3} />      
                    <Route path="/dashboard" component={DashBoard} />            
                    <Route path="/communication-flow" component={CommunicationFlow} />            
                    <Route path="/open-data" component={OpenData} />
                    <Route path="/lead-generator" component={LeadGenerator} />
                    <Route path="/media-planing" component={MediaPlaning} />
                    <Route path="/staff-augmentation" component={StaffAugmentation} />
                    {/* Admin */}
                    <Route path="/my-profile" component={MyProfile} />
                    <Route path="/integrations" component={IntegrationsNav} />
                    <Route path="/integrations/mail" component={MailIntegrations} />
                    <Route path="/integrations/linkedin" component={LinkedinIntegrations} />
                    <Route path="/integrations/whatsapp" component={WhatsappIntegrations} />
                    <Route path="/integrations/calls" component={CallsIntegrations} />
                    <Route path="/integrations/calendar" component={CalendarIntegrations} />
                    <Route path="/integrations/others" component={OthersIntegrations} />
                    
                    <Route path="/billing" component={Billing} />
                    <Route path="/support" component={support} />
                </GridContainer>        
        </Router>
    )
}

export default MyRoutes;

