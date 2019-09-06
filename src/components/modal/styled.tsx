import styled from 'styled-components';

interface iModalContainer {
    bgColor: string;
}
interface iContainerCenterContainer {
    bgColor: string;
}

interface iContainerModal {
    view: boolean; 
}
export const ModalContainer = styled.div`
    background: ${(props:iModalContainer) => props.bgColor || "teal"};
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerCenterContainer = styled.div`
    background: ${(props:iContainerCenterContainer) => props.bgColor || "teal"};
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

//*************Modal**********

export const ContainerModal = styled.div`
    z-index: 50;
    background: rgba(0,0,0,.4);
    width: 100%;
    min-height: 100vh;
    position: fixed;
    transition: top .3s;
    top: ${(props: iContainerModal) => props.view ? "0%" : "-100%"};
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;