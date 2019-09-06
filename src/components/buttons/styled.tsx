import styled from 'styled-components';

//Interface
interface iButtonSC {
    bgColor: string;
    disable: boolean;
}


export const ButtonSC = styled.button`
    background: ${(props: iButtonSC) => props.disable ? "#E6E6E6": props.bgColor};
    width: 142px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 6px;
    color: white;
    font-size: 11.3px;
    font-weight: 500;
    cursor: pointer;
    
`;

//Buttons Icons
export const ButtonsIconsSC = styled.button`
    background: red;
`;