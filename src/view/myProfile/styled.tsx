import styled from 'styled-components';

export const ContainerMyProfile = styled.div`
    margin-top: 50px;
    display: flex; 
    justify-content: center;
    & > div {
        width: 818px;
    }
`;

export const CardMP = styled.div`
    background: white;
    padding: 35px 88px;
    margin-bottom: 21.3px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    width: 100%;
    box-sizing: border-box;
`;
export const UserContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 43.3px;
    img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin-right: 25px;
    }
    h2 {
        color: #B3B3B3;
        margin-top: 8.1px;
        font-size: 9.9px;
    }
`;
export const TitleForm = styled.h2`
    color: #70A1FF;
    font-size: 12.8px;
    margin-top: 0;
`;
export const FormMP = styled.form`
    display: flex;
    justify-content: space-between;
    & > div {
        width: 44.2%;
        label {
            display: block;
            color: #666666;
            margin-top: 10px;
            margin-bottom: 15.3px;
            font-size: 14px;
        }
    }
`;

export const ListUl = styled.ul`
    overflow-y: scroll;
    height: 180px;   
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                height: 21.3px;
                width: 21.3px;
                margin-right: 19.2px;
            }
            h3 {
                margin: 7.4px 0;
                font-size: 11.3px;
                font-weight: 600;
                color: #2F3640;
            }
            svg {
                margin-left: 5px;
            }
        }
    }
`;

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 37px;
    div {
        display: flex;
        justify-content: flex-end;
        align-items:center;
        h3 {
            color: #2F3640;
            font-size: 9.9px;
            margin-left: 7px;
            cursor: pointer;
        }
        img {
            margin-left: 21.3px;
            width: 10.6px;
            height: auto;
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    thead {
        th {
            color: #2F3640;
            font-size: 11.3px;
            padding-bottom: 13.5px;
            
        }
        
    }
    tbody {
        overflow-y: scroll;
        background: #F8F8F8;
        height: 90px;
        td {
            font-size: 9.9px;
            color: #989DA2;
        }
    }
    th, td {
        padding: 6.7px 22px;
    }
`;

export const TripleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 225px;
    & > :nth-child(2) {
        border-left: 1px solid #E6E6E6;
        border-right: 1px solid #E6E6E6;
    }
`;

export const ContainerUl = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul {
        padding: 0;
        margin: 0 0 18.5px;
        list-style: none;
        h3 {
            margin: 0 0 27.6px;
            font-size: 9.9px;
            color: #70A1FF;
        }
        li {
            color:#2F3640;  
            font-size: 11.3px;
            font-weight: 600;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 15.66px;
            p {
                margin: 0;

            }
            img {
                width: 10.6px;
                height: auto;
                margin-right: 10.35px;
            }
        }
    }
`;
export const DobleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ul {
        margin: 24px 0 0;
        padding: 0;
        li {
            display: flex;
            justify-content: space-between;
            margin: 0 0 24px;
            p {
                color: #636363;
                font-weight: 700;
                font-size: 11.3px;
                margin: 0;
            }
            img {
                margin-left: 43.2px;
            }
        }
    }
`;