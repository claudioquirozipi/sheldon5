import styled from 'styled-components';
//*****************Nav*****************
export const NavSC = styled.nav`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    margin-bottom: 21px;
    ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        li a {
            height: 42px;
            text-decoration: none;
            border: 1px solid #004DA9;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;


// ********************Paper*********************
export const PaperSC = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    margin-bottom: 150px;
    overflow: hidden;
    & > div {
        padding: 30px 83px;
    }
    & > p {
        margin: 0;
        background: #FF6B6B;
        color: white;
        height: 42.6px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11.33px;
    }
`;

export const TitleSC = styled.h1`
    color: #FF6B6B;
    font-size: 21.3px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 50.9px;
`;
export const InputContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap : 76px;
    margin-bottom: 42.6px;
`;
export const LabelContainer = styled.div`
        margin-top: 0;
        margin-bottom: 15px;
    label {
        color: #666666;
        font-size: 9.9px;

    }
`;

// ********************DNS*********************
export const DnsContainer = styled.div`
    margin-bottom: 21.6px;
    h2 {
        margin-top: 0;
        margin-bottom: 15.6px;
        font-size: 9.9px;
        color: #70A1FF;
    }
    p {
        color: #989DA2;
        background: #F3F3F3;
        font-size:11.3px;
        line-height: 28.4px;
        padding: 18.4px;
        margin: 0;
        border-radius: 4px;
    }
`;
// ********************Button*********************
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 21.3px;
    button {
        margin-left: 10px;
    }
`;