import styled from 'styled-components';

export const ChatContainer = styled.div`
    height: 100vh;
`;
export const Title  = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 7px;
    h1,h2 {margin: 0;}
    h1 {
        color: #666666;
        font-size: 15.6px;
        margin-right: 8.3px;
    }
    h2 {
        color: #9E9E9E;
        font-size: 11.3px;
    }
`;
export const Chat = styled.div`
    background: white;
    height: calc(100% - 104px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    border-radius: 8px;
    overflow: hidden;
`;
export const ChatComet = styled.div`
    padding-top: 28.4px;
    overflow-y: scroll;
`;
export const ComentSheldon = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    padding: 17px 36px;
    color: #2F3640;
    font-size: 12.8px;
    img {
        width: 23.4px;
        height: 23.4px;
        margin-right: 6.1px;
    }
`;

export const ComentUser = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-end;
    padding: 17px 36px;
    color: #70A1FF;
    font-size: 12.8px;
    img {
        width: 23.4px;
        height: 23.4px;
        margin-left: 6.1px;
    }
`;
export const ComentText = styled.p`
    padding: 13.5px 29px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    max-width: 60%;
    color: #2F3640;
    font-size: 11.3px;
    line-height: 25px;
    border-radius: 8px;
    a {
        color: #70A1FF;
        text-decoration: none;
    }
`;
export const SheldonName = styled.div`
    display: flex;
    align-items: center;
`;
export const UserName = styled.div`
    display: flex;
    align-items: center;
`;


export const InputContainer = styled.div`
    background:#F3F3F3;
    height: 49px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 14.9px;
    img {
        height: 21.3px;
        width: auto;
        margin-right: 21px;
    }
    input {
        width: 83.2%;
        height: 34px;
        border: none;
        outline: none;
        padding: 0 21.8px;
        border-radius: 50px;
        color: #2F3640;
        ::-webkit-input-placeholder {color: #AFBDC2;}
        :-ms-input-placeholder {color: #AFBDC2;}
        ::placeholder {color: #AFBDC2;}
    }
`;