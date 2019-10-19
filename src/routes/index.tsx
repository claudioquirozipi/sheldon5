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
import SalesFunnelNav from '../view/salesFunnel/nav';
import SalesFunnelview1 from '../view/salesFunnel/view1';
import SalesFunnelview2 from '../view/salesFunnel/view2';
import SalesFunnelview3 from '../view/salesFunnel/view3';
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
                            
                            <Route path="/sales-funnel" component={SalesFunnelNav} />            
                            <Switch>
                                <Route path="/sales-funnel/1" component={SalesFunnelview1} />      
                                <Route path="/sales-funnel/2" component={SalesFunnelview2} />      
                                <Route path="/sales-funnel/3" component={SalesFunnelview3} />      
                                <Redirect exact from="/" to="/sales-funnel/1" />
                                <Redirect from="/login" to="/sales-funnel/1" />
                                <Redirect from="/singup" to="/sales-funnel/1" />
                                <Redirect from="/recoverpassword" to="/sales-funnel/1" />
                                <Redirect from="/update-password" to="/sales-funnel/1" />
                            </Switch>

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

