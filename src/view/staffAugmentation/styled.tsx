import styled from 'styled-components';

export const ContainerStaffAugmentation = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25.6px 17.9px;
`;

export const Card = styled.div`
    background: white;
    border-radius: 8px;
    img {
        width: 100%;
    }
    h2 {
        color: #636363;
        text-align: center;
        font-size: 12.8px;
        margin-top: 16px;
        margin-bottom: 8.3px;
        padding: 0 36px;
    }
    p {
        padding: 0 36px;
        margin: 0 0 18.9px;
        font-size: 9.9px;
        color: #B3B3B3;
    }
    & > div {
        display: flex;
        justify-content: center;
        margin-bottom: 21.3px;
    }
`;