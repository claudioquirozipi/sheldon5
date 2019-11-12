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
import * as img1 from '../../assets/img/salesFunnel/database.svg';
import * as img2 from '../../assets/img/salesFunnel/filter.svg';
import * as img3 from '../../assets/img/salesFunnel/calendar.svg';

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
    
    console.log("ya no se que poner para hacer pruebas :(", filterOpctionsName);
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
                        <form>
                            {/* <datalist id="nameOption">
                                {filterOpctionsName.length > 0 ? 
                                    filterOpctionsName.map((dato, i)=>{
                                        <option value={dato.name} key={i} />
                                    })
                                    : null
                                }
                            </datalist> */}
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
                            <input placeholder="Name" list="nameOption" onChange={(e) => setDataFilter.setName(e.target.value)} />
                           
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
                            <input placeholder="Company sector" list="SectorOption" onChange={(e) => setDataFilter.setCompanySector(e.target.value)} />
                            
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
                            <input placeholder="Contry" list="ContryOption" onChange={(e) => setDataFilter.setCountry(e.target.value)} />
                            <SelectMultiple 
                                title="Funnel Status"
                                onChange={setDataFilter.setFunnelStatus} 
                                data={dataFunnelStatus}
                            />
                            <SelectMultiple 
                                title="Potential Size"
                                onChange={setDataFilter.setPotentialSize} 
                                data={dataPotencialSize}
                            />
                        </form>
                        <button onClick={()=>setModalView(!modalView)}>Send</button>
                    </NavContainerRight>
                </div>
            </NavContainer>
        </GridContainerB>
    )
}

export default SalesFunnelFilter;