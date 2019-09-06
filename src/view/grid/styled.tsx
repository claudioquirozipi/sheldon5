import styled from 'styled-components';


export const GridContainerSC = styled.div`
    min-height: 100vh;
    background: #F1F4F9;
    display: grid;
    grid-template-columns: 235px 1fr 1px;
    grid-template-rows: auto 1fr;
    grid-column-gap: 25px;
`;
export const GridContainerASC = styled.div`
    grid-column: 1/2;
    grid-row: 1/3;
`;
export const GridContainerBSC = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
`;
export const GridContainerCSC = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    overflow-x: hidden;
`;
export const GridContainerDSC = styled.div`
    grid-column: 1/4;
    grid-row: 1/3;
`;
export const GridContainerESC = styled.div`
    grid-column: 2/3;
    grid-row: 1/3;
`;