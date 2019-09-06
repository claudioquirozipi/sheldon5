import styled from 'styled-components';

//Interface 
interface iDataProps {
    color: string;
}

export const ContainerCommunicationFlow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px 28.5px;
`;


// ****************Card****************
export const CardContainer = styled.div`
    background: white;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    padding: 0 22px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    & ::before {
        content: "";
        width: 100%;
        height: 12px;
        background: ${(props: iDataProps) => props.color};
        position: absolute;
        top: 0;
        left: 0;
    }
    p {
        font-size: 10px;
        margin-top: 8px;
        margin-bottom: 19px;
        line-height: 19px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 24px;
    h2 {
        color:#2F3640;
        font-size: 12px;
        margin: 0;
    }
`;

export const ImgContainer = styled.div`
    background: ${(props: iDataProps) => props.color};
    border-radius: 50%;
    height: 28px;
    width: 28px;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-right: 19px;
    img {
        width: 14px;
        height: 14px;
    }
`;