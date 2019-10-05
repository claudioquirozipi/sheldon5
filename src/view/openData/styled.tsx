import styled from 'styled-components';

export const  ContainerCenter =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 17.5px;
    h1 {
        color: #000000;
        font-size: 20px;
        margin: 0;
        font-weight: 600;
    }
    img {
        width: 23.4px;
        height: 23.4px;
        margin-right: 10px;
    }
`;
export const Card = styled.div` 
    border-radius: 8px;
    overflow: hidden;
    width: 683.7px;
    background: white;
    img {
        width: 100%;
    }
`;
export const ContainerText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 40px;
    p {
        font-size: 12.8px;
        line-height: 25.9px;
        color: #666666;
        margin: 0;
        a {
            color: #70A1FF;
            text-decoration: none;
        }
    }
`;