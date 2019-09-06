import styled from 'styled-components';

export const CardHomeSC = styled.div`
    background: white;
`;

// **************Table***********
export const TableSC = styled.table`
    border-collapse: collapse;
    tr {
        height: 57px;
        border-bottom: 1px solid #989DA2;
        th {
            color: #2F3640;
            font-weight: bold;
            font-size: 11px;
            text-align: left;
            padding: 0 20px;
        }
        td {
            color: #989DA2;
            font-size: 9.9px;
            padding: 0 20px;

        }
    }
`;
export const ImgTable = styled.img`
    width: 21px;
    height: 21px;
    border-radius: 50%;
    object-fit: cover;
`;

export const StatusSC = styled.div`
    color: white;
    background: #F0DA78;
    border-radius: 3px;
    padding: 5px 10px;
`;