import styled from 'styled-components';

export const NavSC = styled.nav`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    margin-bottom: 21px;
    ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        li a {
            height: 42px;
            text-decoration: none;
            border: 1px solid #004DA9;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;