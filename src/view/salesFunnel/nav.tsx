import * as React from 'react';

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

//Interface
interface iSalesFunnelNav {
    setNumberView: any;
}

function viewModal() {
    console.log("hola mundo")
}

function SalesFunnelNav(props : iSalesFunnelNav) {
    const {setNumberView} = props;
    const [modalView, setModalView] = React.useState(false);
    return(
        <GridContainerB>
            <NavContainer>
                <LinkContainer>
                    <span onClick={() => setNumberView(1)}><img src={img1} alt=""/></span>
                    <span onClick={() => setNumberView(2)}><img src={img2} alt=""/></span>
                    <span onClick={() => setNumberView(3)}><img src={img3} alt=""/></span>
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