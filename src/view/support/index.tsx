import * as React from 'react';

//Components

//Styled-Components
import {
    ChatContainer,
    Title,
    Chat,
    ChatComet,
    ComentSheldon,
    ComentUser,
    ComentText,
    SheldonName,
    UserName,
    InputContainer
} from './styled';

//Assets
import * as smileImg from '../../assets/img/support/smile.svg';
import * as clipImg from '../../assets/img/support/clip.svg';

function Support() {
    return(
        <ChatContainer>
            <Title>
                <h1>Sheldon Support</h1>
                <h2>Tipicaly responds under 1 hour</h2>
            </Title>
            <Chat>
                <ChatComet>
                    <ComentSheldon>
                        <ComentText>Hello Brian! How can I help you?</ComentText>
                        <SheldonName><img src={smileImg}/>Sheldon</SheldonName>
                    </ComentSheldon>
                    <ComentUser>
                        <ComentText>I would like to know more information about your plans and preces.</ComentText>
                        <UserName>Brian Jackson<img src={smileImg} /></UserName>
                    </ComentUser>
                    <ComentSheldon>
                        <ComentText>
                            Sure! I can send to your email all the information that you need,
                            or you can check on our web site <a href="#">www.sheldon.com/info-plans</a>
                        </ComentText>
                        <SheldonName><img src={smileImg}/>Sheldon</SheldonName>
                    </ComentSheldon>
                    <ComentUser>
                        <ComentText>Awesome! thanks a lot</ComentText>
                        <UserName>Brian Jackson<img src={smileImg} /></UserName>
                    </ComentUser>
                </ChatComet>
                <InputContainer>
                    <img src={smileImg} alt="icon"/>
                    <img src={clipImg} alt="icon"/>
                    <input type="text" placeholder="Write something"/>
                </InputContainer>
            </Chat>
        </ChatContainer>
        
    )
}

export default Support;