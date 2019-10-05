import * as React from 'react';

//Components
import GridContainerC from '../grid/gridContainerC';

//Styled-Components
import {
    ContainerButtons,
    PaperSC,
    TitleSC,
    InputContainer,
    LabelContainer,
    DnsContainer
} from './styled';

//Componens-Library
import ButtonsIcons from '../../components/buttons/buttonsIcons';
import InputEmail from '../../components/form/inputEmail';
import ContainerInput from '../../components/form/inputPassword';

//Assets
import * as icon1 from '../../assets/img/integrations/Validate.svg';
import * as icon2 from '../../assets/img/integrations/copy.svg';

function MailIntegrations() {
    return(
        <GridContainerC>
            <PaperSC><div>
                <TitleSC>Mail</TitleSC>
                <InputContainer>
                    <div>
                        <LabelContainer><label htmlFor="">Email</label></LabelContainer>
                        <InputEmail placeholder="Write something" error="error"/>
                    </div>
                    <div>
                    <LabelContainer><label htmlFor="">Password</label></LabelContainer>
                        <ContainerInput placeholder="Write something" error="error"/>
                    </div>
                    <div></div>
                <ContainerButtons>
                    <ButtonsIcons 
                        imgIcon={icon1}
                        bgColor="#3FC180"
                        disable={true}
                        >
                            Authentication
                    </ButtonsIcons>
                </ContainerButtons>
                </InputContainer>

                <DnsContainer>
                    <h2>Configure el registro TXT (DKIM) para "mail._domainkey.tracsa.com.ar" a</h2>
                    <p>k=rsa; =MIGfMA0GCSqGSIb3DQEBAQUA4GN DCBiQKBgQDeMVIzrCa3T14JsNYIRv5/2 1/v2itlviLQBwXsa7 shBD6TrBkswFUToP MRWC9tbR/5ey0nRBH0ZVxp+lsTxid2 2z+FApQ6ra2VsXfbJP3HE6wAO0TVEJt1 mec zhEd2Jiz/fcabIISgXEdSpTYJb0ct0VRxcg4c8c7wIDAQAB</p>
                    <ContainerButtons>
                        <ButtonsIcons 
                            imgIcon={icon2}
                            bgColor="#3FC180"
                            >
                                Copy
                        </ButtonsIcons>
                    </ContainerButtons>
                </DnsContainer>

                <DnsContainer>
                    <h2>Configure el registro TXT (SPF) para "tracsa.co.ar" a</h2>
                    <p>v=spf1 include:spf.sendinblue.com mx~all</p>
                    <ContainerButtons>
                        <ButtonsIcons 
                            imgIcon={icon2}
                            bgColor="#3FC180"
                            >
                                Copy
                        </ButtonsIcons>
                    </ContainerButtons>
                </DnsContainer>

                <DnsContainer>
                    <h2>Configure el registro TXT para "tracsa.com.ar" a</h2>
                    <p>Sendinblue-code:788763df4729cd6116fdbc74ba1c370</p>
                    <ContainerButtons>
                        <ButtonsIcons 
                            imgIcon={icon2}
                            bgColor="#3FC180"
                            >
                                Copy
                        </ButtonsIcons>
                    </ContainerButtons>
                </DnsContainer>

                <DnsContainer>
                    <h2>Sendinblue-code:788763df4729cd6116fdbc74ba1c370</h2>
                    <p>v=DMARC1; p=none; sp=none; rua=mailo:dmarc@mailinblue.com!10m; ruf=maito:dmarc@mailinblue.co m!10m; rf=afrf;pct=100; ri=86400</p>
                    <ContainerButtons>
                        <ButtonsIcons 
                            imgIcon={icon2}
                            bgColor="#3FC180"
                            >
                                Copy
                        </ButtonsIcons>
                    </ContainerButtons>
                </DnsContainer>

                <DnsContainer>
                    <h2>Configure el registro TXT para "boolanews.com" a</h2>
                    <p>Sendinblue-code:788763df4729cd6116fcdbc74ba1c370</p>
                    <ContainerButtons>
                    <ButtonsIcons 
                            imgIcon={icon2}
                            bgColor="#3FC180"
                            >
                                Validate
                        </ButtonsIcons>
                        <ButtonsIcons 
                            imgIcon={icon2}
                            bgColor="#3FC180"
                            >
                                Copy
                        </ButtonsIcons>
                    </ContainerButtons>
                </DnsContainer>
            </div>
            <p>La propagación completa del DNS puede tardar entre 24-48 horas.</p>
            </PaperSC>
        </GridContainerC>
    )
}

export default MailIntegrations;