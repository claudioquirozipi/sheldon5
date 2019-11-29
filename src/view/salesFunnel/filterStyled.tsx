import styled from 'styled-components';

export const ButonSend = styled.button`
    background: #3FC180;
    color: white;
    font-size: 14px;
    font-weight: 500;
    width: 92px;
    height: 32px;
    border: 2px solid #3fc180;
    outline: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-right: 8px;
        width: 11px;
        height: 11px;

    }
`;

export const InputList = styled.div`
    margin: 0 10.6px;
    background: white;
    font-size: 14px;
    font-weight: 500;
    padding: 0 0 0 15px;
    width: 90px;
    height: 28px;
    border: 2px solid #004DA9;
    outline: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        width: 100%;
        color: #004DA9;
        border: none;
        outline: none;
        &::placeholder {
            color: #004DA9;
        }
    }
    img {
        margin-right: 8px;
        width: 11px;
        height: 11px;

    }
`;

export const FormSend = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`;