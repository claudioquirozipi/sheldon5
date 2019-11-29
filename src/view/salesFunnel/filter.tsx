import * as React from 'react';

//Components
import GridContainerB from '../grid/gridContainerB';
import SelectMultiple from './selectMultiple';


//Styled-Components
import {
    NavContainer,
    LinkContainer,
    NavContainerRight
} from './styled';
import {
    ButonSend,
    InputList,
    FormSend
} from './filterStyled';
import * as img1 from '../../assets/img/salesFunnel/database.svg';
import * as img2 from '../../assets/img/salesFunnel/filter.svg';
import * as img3 from '../../assets/img/salesFunnel/calendar.svg';
import * as buttonSend from '../../assets/img/salesFunnel/buttonSend.svg';
import * as status from '../../assets/img/salesFunnel/status.svg';
import * as potential from '../../assets/img/salesFunnel/potential.svg';

//Data 
import {
    dataFunnelStatus,
    dataPotencialSize
} from './dataFilter';
//Interface 
interface iFilterOpctionsName {
    name: string;

}
interface iSalesFunnelFilter {
    setNumberView: any;
    setDataFilter: any;
    modalView: boolean;
    setModalView: any;
    filterOpctionsName: iFilterOpctionsName[];
    filterOpctionsContry: string[];
    filterOpctionsCompany:string[];
}

function SalesFunnelFilter(props: iSalesFunnelFilter) {
    const {setNumberView, setDataFilter, modalView, setModalView, filterOpctionsName, filterOpctionsContry, filterOpctionsCompany} = props;
    
    
    return(
        <GridContainerB>
            <NavContainer>
                <LinkContainer>
                    <span onClick={() => setNumberView(1)}><img src={img1} alt=""/></span>
                    <span onClick={() => setNumberView(2)}><img src={img2} alt=""/></span>
                    <span onClick={() => setNumberView(3)}><img src={img3} alt=""/></span>
                </LinkContainer>
                <div>
                    
                    <NavContainerRight>
                        <FormSend>
                            
                            <datalist id="nameOption">
                                {filterOpctionsName.length > 0 ? 
                                    filterOpctionsName.map((dato, i)=>{
                                        return(
                                        <option value={dato.name} key={i} />
                                        )
                                    })
                                    : null
                                }
                            </datalist>
                            <InputList>
                                <img src={potential} alt=""/>
                                <input placeholder="Name" list="nameOption" onChange={(e) => setDataFilter.setName(e.target.value)} />
                            </InputList>
                           
                            <datalist id="SectorOption">
                                {filterOpctionsCompany.length > 0 ? 
                                    filterOpctionsCompany.map((dato, i)=>{
                                        return(
                                        <option value={dato} key={i} />
                                        )
                                    })
                                    : null
                                }
                            </datalist>
                            <InputList>
                                <img src={potential} alt=""/>
                                <input placeholder="Sector" list="SectorOption" onChange={(e) => setDataFilter.setCompanySector(e.target.value)} />
                            </InputList>
                            
                            <datalist id="ContryOption">
                                {filterOpctionsContry.length > 0 ? 
                                    filterOpctionsContry.map((dato, i)=>{
                                        return(
                                            <option value={dato} key={i} />
                                            )
                                        })
                                        : null
                                    }
                            </datalist>
                            <InputList>
                            <img src={potential} alt=""/>
                                <input placeholder="Contry" list="ContryOption" onChange={(e) => setDataFilter.setCountry(e.target.value)} />
                            </InputList>
                            <SelectMultiple 
                                icon={status}
                                title="Status"
                                onChange={setDataFilter.setFunnelStatus} 
                                data={dataFunnelStatus}
                            />
                            <SelectMultiple 
                                icon={potential}
                                title="Potential"
                                onChange={setDataFilter.setPotentialSize} 
                                data={dataPotencialSize}
                            />
                        </FormSend>
                        <ButonSend onClick={()=>setModalView(!modalView)}>
                            <img src={buttonSend} />
                            Send
                        </ButonSend>
                    </NavContainerRight>
                </div>
            </NavContainer>
        </GridContainerB>
    )
}

export default SalesFunnelFilter;