import styled from 'styled-components';

export const FormSC = styled.form`
    display: flex; 
    flex-direction: column;
    align-items: center;
    h1 {
        text-align: center;
        color: #70A1FF;
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 26px;
    }
    a {
        color: #70A1FF;
        font-size: 10px;
        text-decoration: none;
    }
`;

export const ContainerInput = styled.div`
        border: 2px solid #70A1FF;
        border-radius: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 14px;
        height: 43px;
        width: 327px;
        position: relative;
        margin-bottom: 22px;
        img {
            width: 18px;
            height: auto;
        }
        
            input {
            margin-left: 20px;
                border: none;
                outline: none;
                width: 100%;
            }
        
        span {
            position: absolute;
            bottom: -18px;
            left: 14px;
            color: #FF6B81;
            font-size: 10px;
        }
    
    
`;

export const InputSubmitSC = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    input {
        background: #70A1FF;
        color: white;
        border: none;
        outline: none;
        width: 142px;
        height: 43px;
        font-size: 11px;
    }
`;