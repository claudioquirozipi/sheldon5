import * as React from 'react';
import {Link} from 'react-router-dom';

//Components
import GridContainerB from '../grid/gridContainerB';
import SalesFunnelModal from './modal';
//Components-library
import ModalCQ from '../../components/modal/modal';

//Styled-Components
import {
    NavContainer,
    LinkContainer
} from './styled';
import * as img1 from '../../assets/img/salesFunnel/database.svg';
import * as img2 from '../../assets/img/salesFunnel/filter.svg';
import * as img3 from '../../assets/img/salesFunnel/calendar.svg';


function viewModal() {
    console.log("hola mundo")
}

function SalesFunnelNav() {
    const [modalView, setModalView] = React.useState(false);
    return(
        <GridContainerB>
            <NavContainer>
                <LinkContainer>
                    <Link to="/sales-funnel/1"><img src={img1} alt=""/></Link>
                    <Link to="/sales-funnel/2"><img src={img2} alt=""/></Link>
                    <Link to="/sales-funnel/3"><img src={img3} alt=""/></Link>
                </LinkContainer>
                <div>
                    <ModalCQ view={modalView}>
                        <SalesFunnelModal 
                            modalView={modalView}
                            setModalView={setModalView}
                        />
                    </ModalCQ>
                    <button onClick={()=>setModalView(!modalView)}>Send</button>
                </div>
            </NavContainer>
        </GridContainerB>
    )
}

export default SalesFunnelNav;