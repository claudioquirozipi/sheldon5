import * as React from 'react';

//Styled-Components
import {
    CardContainer,
    TitleContainer,
    ImgContainer
} from './styled';

//interface
interface iCard {
    data: idata;
}
interface idata {
    color: string;
    title: string;
    text: string;
    icon: string;
}
function Card(props: iCard) {
    const {color, title, text, icon} = props.data;
    return(
        <CardContainer color={color}>
            <TitleContainer>
                <ImgContainer color={color}><img src={icon} alt=""/></ImgContainer>
                <h2>{title}</h2>
            </TitleContainer>
            <p>{text}</p>
        </CardContainer>
    ) 
}

export default Card;