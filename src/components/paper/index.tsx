import * as React from 'react';
import {Link} from 'react-router-dom';

//Styled-Components
import {
    PaperContainer,
    ImgClouseSC
} from './styled';

//Assest
import * as imgClouse from './clouse.svg';

interface iPaper {
    urlClouse: string;
    children: any;
}

function Paper(props: iPaper) {
    const {urlClouse} = props;
    return(
        <PaperContainer>
            <ImgClouseSC>
                <Link to={urlClouse}>
                    <img src={imgClouse} alt=""/>
                </Link>
            </ImgClouseSC>      
            {props.children}
        </PaperContainer>
    )
}

export default Paper