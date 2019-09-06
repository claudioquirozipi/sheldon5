import * as React from 'react';

//Components

import Card from './card';
import SalesFunnelModal from '../salesFunnel/modal';
//Components-Library
import ModalCQ from '../../components/modal/modal';

//Styled-Components
import {
    ContainerCommunicationFlow
} from './styled';

//Data
import {data} from '../../controller/communicationFlow/data';


function CommunicationFlow() {
    const [modalView, setModalView] = React.useState(false);
    return(
        
            <ContainerCommunicationFlow>
                <ModalCQ view={modalView}>
                    <SalesFunnelModal 
                        modalView={modalView}
                        setModalView={setModalView}
                    />
                </ModalCQ>
                {
                    data.map((data, i)=> {
                        return(
                            <div key={i} onClick={()=>setModalView(!modalView)}>
                                <Card  data={data} />
                            </div>
                        )
                    })
                }
            </ContainerCommunicationFlow>
        
    )
}

export default CommunicationFlow;