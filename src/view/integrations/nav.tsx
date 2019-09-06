import * as React from 'react';
import {Link} from 'react-router-dom';


//Components
import GridContainerB from '../grid/gridContainerB';
//Styled-Components
import {
    NavSC
} from './styled';

function Nav() {
    return(
        <GridContainerB>
            <NavSC>
                <ul>
                    <li><Link to="/integrations/mail">Mail</Link></li>
                    <li><Link to="/integrations/linkedin">Linkedin</Link></li>
                    <li><Link to="/integrations/whatsapp">whatsapp</Link></li>
                    <li><Link to="/integrations/calls">calls</Link></li>
                    <li><Link to="/integrations/calendar">calendar</Link></li>
                    <li><Link to="/integrations/others">others</Link></li>
                </ul>
            </NavSC>
        </GridContainerB>
    )
}

export default Nav;