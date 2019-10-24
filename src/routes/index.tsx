import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//Redux
import {useSelector} from 'react-redux';

import GridContainer from '../view/grid/gridContainer';
//Components
import ControllerNav from '../controller/nav';
import ControllerHome from '../controller/home';
import ControllerLogin from '../controller/login';

import ControllerSingUp from '../controller/login/singUp';
import ControllerNesPassword from '../controller/login/newPassword';
import ControllerCsvLoader from '../controller/csvLoader';
import ControllerRecoberPassword from '../controller/login/recoverPassword';
//App Components
import ControllerSalesFunnel from '../controller/salesFunnel';
import DashBoard from '../view/dashBoard';
import CommunicationFlow from '../view/communicationFlow';
import OpenData from '../view/openData';
import LeadGenerator from '../view/LeadGenerator';
import MediaPlaning from '../view/mediaPlaning';
import ControllerStaffAugmentation from '../controller/staffAugmentation';
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
    const login = useSelector((state:any) => state.user.login);
    console.log("router", login)
    
    return (
        <Router>
                <GridContainer>
                    <NavTest />
                    {login 
                    ? 
                        <>
                            <Route path="/" component={ControllerNav}/>
                            
                            <Route path="/csv-loader" component={ControllerCsvLoader} />  
                            
                            <Route path="/sales-funnel" component={ControllerSalesFunnel} />            

                            <Route path="/dashboard" component={DashBoard} />            
                            <Route path="/communication-flow" component={CommunicationFlow} />            
                            <Route path="/open-data" component={OpenData} />
                            <Route path="/lead-generator" component={LeadGenerator} />
                            <Route path="/media-planing" component={MediaPlaning} />
                            <Route path="/staff-augmentation" component={ControllerStaffAugmentation} />
                            
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
                            
                        </>
                    :
                        <Switch>
                            <Route path="/login" component={ControllerLogin}/>
                            <Route path="/singup" component={ControllerSingUp} />     
                            <Route path="/recoverpassword" component={ControllerRecoberPassword} />     
                            <Route path="/update-password/:token" component={ControllerNesPassword} />
                            <Redirect from="/" to="/login" />
                        </Switch>
                    }
                    
                </GridContainer>        
        </Router>
    )
}

export default MyRoutes;

