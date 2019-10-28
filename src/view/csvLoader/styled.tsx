import styled, {keyframes} from 'styled-components';
import {MQ} from '../../config/media';

//Interface
interface iContainerCsvLoader {
    inputColor?: any;
}
interface iImgContainer {
    loader: boolean;
}
export const ContainerCsvLoader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 113px;
    }
    h1 {
        margin-top: 46px;
        color: #2F3640;
        font-weight: bold;
        font-size: 1.8em;
        margin-bottom: 25px;
        @media ${MQ.sm} {
            font-size: 2.8em;
            margin-bottom: 50px;
        }
        @media ${MQ.md} {
            margin-bottom: 33px;
            font-size: 2em;
        }
    }
    p {
        color: #989DA2;
        margin-top: 0;
        text-align: center;
        font-size: 12px;
        margin-bottom: 40px;
        line-height: 28px;
        @media ${MQ.sm} {
            font-size: 20px;
            margin-bottom: 70px;
        }
        @media ${MQ.md} {
            font-size: 16px;
            margin-bottom: 66px;
        }
        a {
            color: #3FC180;
            text-decoration: none;
        }
    }
    input {
        background: ${(props: iContainerCsvLoader) => props.inputColor ? "#3FC180" : "#E6E6E6"};
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
        @media ${MQ.sm} {
            font-size: 32px;
            width: 235px;
            height: 60px;
        }
        @media ${MQ.md} {
            margin: 0 32px ;
            width: 142px;
            height: 42px;
            font-size: 16px;
        }
    }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg) translate(0%, 0%);
  }

  to {
    transform: rotate(360deg) translate(0%, 0%);
`;

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        width: 180px;
        height: 180px;
        border: 10px solid transparent;
        border-top: 10px solid #3FC180;
        border-radius: 50%;
        transform-origin: center;
        top: -20%;
        display: ${(props: iImgContainer) => props.loader ? "block": "none"};
        animation: ${rotate} 2s linear infinite;
        box-sizing: border-box;
    }

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
    a {
        margin: 0 20px ;
        background: #3FC180;
        width: 120px;
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
        text-decoration: none;
        @media ${MQ.sm} {
            font-size: 32px;
            width: 235px;
            height: 60px;
        }
        @media ${MQ.md} {
            margin: 0 32px ;
            width: 142px;
            height: 42px;
            font-size: 16px;
        }
    }
`;

export const DisplayNone = styled.div`
    display: none;
`;

