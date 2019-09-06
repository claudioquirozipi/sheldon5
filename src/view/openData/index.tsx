import * as React from 'react';

//Components


//Components-Libraly
import ContainerCenter from '../../components/modal/containerCenter';
import CardCQ from '../../components/cards/index';

//Assest
// import * as imgVideo from '../../assets/img/openData/video.png';

function OpenData() {
    return(
        
            <ContainerCenter bgColor="transparent">
                <h1>Open data service</h1>
                <CardCQ>
                    <div>
                       {/* <img src={imgVideo} alt="hola"/> */}
                    </div>
                    <div>
                        <p>
                            1.350 desisores de compra fueron encontrados que <br/>
                            comparten los mismos criterios que tus clientes Ver más
                        </p>
                        <button>Adquirir</button>
                    </div>
                </CardCQ>
            </ContainerCenter>
        
    )
}

export default OpenData;