import styled from 'styled-components';


// ********************Paper*********************
export const PaperSC = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    padding: 30px 83px;
    h1 {
        color: #FF6B6B;
        font-size: 21px;
        margin-top: 0;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    button {
        margin-left: 10px;
    }
`;