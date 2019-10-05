import * as React from 'react';

//Components

//Components-Library
import Button from '../../components/buttons';
import ButtonsIcons from '../../components/buttons/buttonsIcons';
import InputUser from '../../components/form/inputUser';
//Styled-Components
import {
    ContainerMyProfile,
    CardMP,
    UserContainer,
    FormMP,
    TitleForm,
    ListUl,
    ContainerTitle,
    Table,
    TripleContainer,
    DobleContainer,
    ContainerUl
} from './styled';

//Assest 
import * as userImg from '../../assets/img/myProfile/user2x.png';
import * as upImg from '../../assets/img/myProfile/up.svg';
import * as downImg from '../../assets/img/myProfile/down.svg';
import * as checkImg from '../../assets/img/myProfile/check.svg';
import * as dolarImg from '../../assets/img/myProfile/dolar.svg';
import * as calendarImg from '../../assets/img/myProfile/calendar.svg';
import * as boton1Img from '../../assets/img/myProfile/boton1.svg';
import * as boton2Img from '../../assets/img/myProfile/boton2.svg';
import * as checkOffImg from '../../assets/img/myProfile/checkOff.svg';
import * as checkOnImg from '../../assets/img/myProfile/checkOn.svg';
function MyProfile() {
    const array=[1,2,3,4,5,6,7,8,9,10]
    return(
        <ContainerMyProfile>
            <div>
                <CardMP>
                    <UserContainer>
                        <img src={userImg} alt="user"/>
                        <div>
                            <Button bgColor="#70A1FF" disable={false} text="Upload photo"/>
                            <h2>At least 400x400, JPG or PNG</h2>
                        </div>
                    </UserContainer>
                    <TitleForm>Personal information</TitleForm>
                    <FormMP>
                        <div>
                            <label htmlFor="">Name & Last name</label>
                            <InputUser placeholder="Write something" error="error" setValue={()=>{}}/>
                            <label htmlFor="">Phone</label>
                            <InputUser placeholder="Select type" error="error" setValue={()=>{}}/>
                            <label htmlFor="">Birthday</label>
                            <InputUser placeholder="Select date" error="error" setValue={()=>{}}/>
                        </div>
                        <div>
                            <label htmlFor="">Corporative mail</label>
                            <InputUser placeholder="Write something" error="error" setValue={()=>{}}/>
                            <label htmlFor="">Charge</label>
                            <InputUser placeholder="Select somthing" error="error" setValue={()=>{}}/>
                        </div>
                    </FormMP>
                </CardMP>
                <CardMP>
                <TitleForm>Datos de empresa</TitleForm>
                    <FormMP>
                        <div>
                            <label htmlFor="">Dominio</label>
                            <InputUser placeholder="Write something" error="error" setValue={()=>{}}/>
                            <label htmlFor="">Cellphone / WhatsApp</label>
                            <InputUser placeholder="Select type" error="error" setValue={()=>{}}/>
                            <label htmlFor="">City</label>
                            <InputUser placeholder="Select date" error="error" setValue={()=>{}}/>
                        </div>
                        <div>
                            <label htmlFor="">Integrantes</label>
                            <InputUser placeholder="Write something" error="error" setValue={()=>{}}/>
                            <ListUl>
                                {array.map(element => {
                                    return(
                                        <li>
                                            <div>
                                                <img src={userImg} alt="user"/>
                                                <h3>Jorge Perez</h3>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21.515" height="21.514" viewBox="0 0 21.515 21.514"><path  d="M971.116-2283.743a10.757,10.757,0,0,1-10.757,10.757,10.756,10.756,0,0,1-10.757-10.757,10.756,10.756,0,0,1,10.757-10.757A10.757,10.757,0,0,1,971.116-2283.743Zm-12,5.7,7.981-7.981a.7.7,0,0,0,0-.982l-.981-.981a.693.693,0,0,0-.982,0l-6.509,6.509-3.039-3.039a.692.692,0,0,0-.981,0l-.982.981a.694.694,0,0,0,0,.981l4.511,4.512a.7.7,0,0,0,.982,0Z" transform="translate(-949.602 2294.5)" fill="#3fc180"/></svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21.515" height="21.515" viewBox="0 0 21.515 21.515"><path  d="M1002.117-2283.743a10.757,10.757,0,0,1-10.757,10.758,10.757,10.757,0,0,1-10.757-10.758,10.757,10.757,0,0,1,10.757-10.757A10.758,10.758,0,0,1,1002.117-2283.743Zm-4.624,3.555-3.569-3.569,3.569-3.57a1.121,1.121,0,0,0,0-1.586l-.793-.793a1.121,1.121,0,0,0-1.586,0l-3.57,3.569-3.569-3.569a1.121,1.121,0,0,0-1.586,0l-.794.793a1.123,1.123,0,0,0,0,1.586l3.57,3.57-3.57,3.569a1.123,1.123,0,0,0,0,1.586l.794.792a1.121,1.121,0,0,0,1.586,0l3.569-3.569,3.57,3.569a1.121,1.121,0,0,0,1.586,0l.793-.792A1.121,1.121,0,0,0,997.493-2280.187Z" transform="translate(-980.602 2294.5)" fill="#b3b3b3" opacity="0.4"/></svg>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ListUl>
                        </div>
                    </FormMP>
                </CardMP>
                <CardMP>
                    <ContainerTitle>
                        <TitleForm>Lo que ofreces</TitleForm>
                        <div>
                            <img src={upImg} alt="import svg"/>
                            <h3>Inport CSV</h3>
                            <img src={downImg} alt="download"/>
                            <h3>Download CSV</h3>
                        </div>
                    </ContainerTitle>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Producto o servicio</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th>Ajuste</th>
                                        <th>Plazo</th>
                                        <th>Desc por cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {array.map((valor)=>{return(
                                        <tr>
                                            <td>Cabillas estriadas</td>
                                            <td>mts</td>
                                            <td>1.000 PA</td>
                                            <td>10%</td>
                                            <td>Mensual</td>
                                            <td>5% x 10.000</td>
                                        </tr>
                                    )})}
                                </tbody>
                            </Table>
                </CardMP>
                <CardMP>
                    <TitleForm>Security</TitleForm>
                    <FormMP>
                        <div>
                            <label htmlFor="">New password</label>
                            <InputUser placeholder="Write something" error="error" setValue={()=>{}}/>
                        </div>
                        <div>
                            <label htmlFor="">Secret word</label>
                            <InputUser placeholder="Write something" error="error" setValue={()=>{}}/>
                        </div>
                    </FormMP>
                </CardMP>
                <CardMP>
                    <TitleForm>Plans & services</TitleForm>
                    <TripleContainer>
                        <ContainerUl>
                            <ul>
                                <h3>Subscription</h3>
                                <li><img src={checkImg} alt="icon"/> 15 members</li>
                                <li><img src={dolarImg} alt="icon"/> $500 monthly</li>
                                <li><img src={calendarImg} alt="icon"/> 20/01/19 - 20/01/20</li>
                            </ul>       
                            <Button bgColor="#FF6B81" text="Cancel" disable={false}/>
                        </ContainerUl>
                        <ContainerUl>
                            <ul>
                                <h3>Subscription</h3>
                                <li><img src={checkImg} alt="icon"/> 15 members</li>
                                <li><img src={dolarImg} alt="icon"/> $500 monthly</li>
                                <li><img src={calendarImg} alt="icon"/> 20/01/19 - 20/01/20</li>
                            </ul>       
                            <Button bgColor="#FF6B81" text="Cancel" disable={false}/>
                        </ContainerUl>
                        <ContainerUl>
                            <ul>
                                <h3>Subscription</h3>
                                <li><img src={checkImg} alt="icon"/> 15 members</li>
                                <li><img src={dolarImg} alt="icon"/> $500 monthly</li>
                                <li><img src={calendarImg} alt="icon"/> 20/01/19 - 20/01/20</li>
                            </ul>                                           
                        </ContainerUl>
                    </TripleContainer>
                </CardMP>
                <CardMP>
                <TitleForm>Plans & services</TitleForm>
                    <TripleContainer>
                        <ContainerUl>
                            <ul>
                                <h3>Subscription</h3>
                                <li><p>MasterCard (xxxx xxxx xxxx 1234)</p></li>
                            </ul>       
                            <ButtonsIcons imgIcon={boton1Img} bgColor="#70A1FF" disable={false}>
                                Wallet
                            </ButtonsIcons>
                        </ContainerUl>
                        <ContainerUl>
                            <ul>
                                <h3>Subscription</h3>
                                <li><p>Brian Jackson</p></li>
                                <li><p>Tracsa.CA </p></li>
                                <li><p>12-1256789-4 </p></li>
                                <li><p>Rosario, Santa Fe, Argentina</p></li>
                                <li><p>Código postal 1234</p></li>
                            </ul>                                           
                        </ContainerUl>
                        <ContainerUl>
                            <ul>
                                <h3>Subscription</h3>
                                <li><p>Last (10/07/19)</p></li>
                            </ul>       
                            <ButtonsIcons imgIcon={boton2Img} bgColor="#70A1FF" disable={false}>
                                Invoices
                            </ButtonsIcons>
                        </ContainerUl>
                    </TripleContainer>
                </CardMP>
                <CardMP>
                    <TitleForm>Plans & services</TitleForm>
                    <DobleContainer>
                        <ul>
                            <li><p>Send invoice</p><img src={checkOffImg}/></li>
                            <li><p>New leads</p><img src={checkOnImg}/></li>
                        </ul>
                        <ul>
                            <li><p>Follow up</p><img src={checkOffImg}/></li>
                            <li><p>Weekly reports</p><img src={checkOnImg}/></li>
                        </ul>
                    </DobleContainer>
                </CardMP>
            </div>
        </ContainerMyProfile>
    )
}

export default MyProfile;