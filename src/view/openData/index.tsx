import * as React from 'react';

//Components


//Components-Libraly
import CardCQ from '../../components/cards/index';
import Button from '../../components/buttons';
//Styled-components
import {
    ContainerCenter,
    Title,
    Card,
    ContainerText
} from './styled';
//Assest
import * as video from '../../assets/img/openData/video.png';
import * as icon1 from '../../assets/img/openData/icon.svg';

function OpenData() {
    return(
        
            <ContainerCenter>
                <Title>
                    <img src={icon1}/>
                    <h1>Open data service</h1>
                </Title>
                <Card>
                    <div>
                       <img src={video} alt="hola"/>
                    </div>
                    <ContainerText>
                        <p>
                            1.350 desisores de compra fueron encontrados que <br/>
                            comparten los mismos criterios que tus clientes <a href="#">Ver más</a>
                        </p>
                        <Button text="Adquirir" bgColor="#70A1FF" disable={false}/>
                    </ContainerText>
                </Card>
            </ContainerCenter>
        
    )
}

export default OpenData;