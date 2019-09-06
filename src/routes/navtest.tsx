import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {MyContext} from '../context';



const NavSC = styled.nav`
    position: fixed;
    border: 1px solid darkblue;
    background: white;
    color: darkblue;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
`;

function NavTest() {
    const value:any = React.useContext(MyContext);
    console.log("hola", value.saludo, value.setSaludo)
    return(
        <NavSC>
            <ul>
                <button onClick={value.setSaludo}>{value.saludo}</button>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/singup">SingUp</Link>
                </li>
                <li>
                    <Link to="/recoverpassword">recoverpassword</Link>
                </li>
                <li>
                    <Link to="/newpassword">newpassword</Link>
                </li>
                <li>
                    <Link to="/csv-loader">CsvLoader</Link>
                </li>
            </ul>
        </NavSC>
    )
}

export default NavTest;