import * as React from 'react';
import {Link} from 'react-router-dom';

//Styled-Componets
import {
    NavCS
} from './styled';
import GridContainerA from '../grid/gridContainerA';

//Assets
import * as  icon from '../../assets/img/nav/icon.svg';
import * as icon1 from '../../assets/img/nav/salesFunnel.svg';
import * as icon2 from '../../assets/img/nav/dashboard.svg';
import * as icon3 from '../../assets/img/nav/communicationFlow.svg';
import * as icon4 from '../../assets/img/nav/openData.svg';
import * as icon5 from '../../assets/img/nav/form.svg';
import * as icon6 from '../../assets/img/nav/mediaPlaning.svg';
import * as icon7 from '../../assets/img/nav/staffAugmentation.svg';
import * as icon8 from '../../assets/img/nav/myProfile.svg';
import * as icon9 from '../../assets/img/nav/Integrations.svg';
import * as icon10 from '../../assets/img/nav/billing.svg';
import * as icon11 from '../../assets/img/nav/support.svg';
import * as icon12 from '../../assets/img/nav/logout.svg';
function Nav() {
    return(
        <GridContainerA>
            <NavCS>
                <h2>Dashboard</h2>
                <ul>
                    <li><Link to="/sales-funnel/1"><img src={icon1} alt=""/> Sales funnel</Link></li>
                    <li><Link to="/dashboard"><img src={icon2} alt=""/>Dashboard</Link></li>
                    <li><Link to="/communication-flow"><img src={icon3} alt=""/>Communication flow</Link></li>
                    <li><Link to="/open-data"><img src={icon4} alt=""/>Open Data</Link></li>
                    <li><Link to="/lead-generator"><img src={icon5} alt=""/>Lead Generator</Link></li>
                    <li><Link to="/media-planing"><img src={icon6} alt=""/>Media planing</Link></li>
                    <li><Link to="/staff-augmentation"><img src={icon7} alt=""/>Staff augmentation</Link></li>
                </ul>
                <h2>Admin</h2>
                <ul>
                    <li><Link to="/my-profile"><img src={icon8} alt=""/>My profile</Link></li>
                    <li><Link to="/integrations/mail"><img src={icon9} alt=""/>Integrations</Link></li>
                    <li><Link to="/billing"><img src={icon10} alt=""/>Billing</Link></li>
                    <li><Link to="/support"><img src={icon11} alt=""/>Support</Link></li>
                    <li><Link to="/login"><img src={icon12} alt=""/>Cerrar Seción</Link></li>
                </ul>
            </NavCS>
        </GridContainerA>
    )
}

export default Nav;