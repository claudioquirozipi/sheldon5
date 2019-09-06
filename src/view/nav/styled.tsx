import styled from 'styled-components';
import {MQ} from '../../config/media';


export const NavCS = styled.nav`
    background: #004DA9;
    height: 100%;
    padding-top: 53px;
    box-sizing: border-box;
    color: white;
    h2 {
        font-weight: 600;
        padding-left: 36px;
        font-size: 12.8px;
        margin: 0 0 10px;
    }
    ul {
        padding: 0;
        list-style: none;
        margin-bottom: 22px;
        li {
            a {
                padding-left: 36px;
                height: 36px;
                display: block;
                color: white;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 11px;
                font-weight: 400;
                text-decoration: none;
                img {
                    height: 12px;
                    width: 12px;
                    margin-right: 12px;
                }
            }
            a:hover {
                background: rgba(47,54,64,.3);
            }
        }
    }
`;