import styled from 'styled-components';

export const ContainerCsvLoader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 113px;
    }
    h1 {
        margin-top: 46px;
        margin-bottom: 33px;
        color: #2F3640;
        font-weight: bold;
    }
    p {
        color: #989DA2;
        margin-top: 0;
        margin-bottom: 66px;
        text-align: center;
        a {
            color: #3FC180;
            text-decoration: none;
        }
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
        width: 95px;
        height: auto;
        margin-bottom: 16px;
    }
    span {
        font-size: 14px;
        color: #8F8F8F;
    }
`;

export const ContainerButtons = styled.div`
    display: flex; 
    justify-content: center;
    button {
        margin: 0 32px ;
    }
`;