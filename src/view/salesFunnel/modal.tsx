import * as React from 'react';

//Styled-Components
import {
    ContainerModal,
    ContainerButton,
    DobleInput,
    ContainerInput,
    ImgModal
} from './styled';

//Assets
import * as imgModal from '../../assets/img/salesFunnel/imgModal.svg';

function SalesFunnelModal(props: any) {
    const {modalView, setModalView} = props;
    return(
        <ContainerModal>
            <ContainerButton onClick={()=>setModalView(!modalView)}>
                <h1>X</h1>
                <img src="" alt=""/>
            </ContainerButton>
            <ImgModal src={imgModal} alt=""/>
            <form>
                <h1>ContainerButton</h1>
                <ContainerInput>
                    <label htmlFor="">Canal</label>
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </ContainerInput>
                <DobleInput>
                    <ContainerInput>
                        <label htmlFor="">Set date</label>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="">Set time</label>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </ContainerInput>
                </DobleInput>
                <ContainerInput>
                    <label htmlFor="">Message</label>
                    <textarea name="" id=""  rows={10}></textarea>
                </ContainerInput>
            
                <div>
                    <input type="checkbox" name="" id="sendMe"/>
                    <label htmlFor="sendMe">Send me a test before</label>
                </div>
                <p>Se enviará un test a los colaboradores de la empresa</p>
                <button>Enviar</button>
                
            </form>
        </ContainerModal>

    )
}

export default SalesFunnelModal;