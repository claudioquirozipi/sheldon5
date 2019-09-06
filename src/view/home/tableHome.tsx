import * as React from 'react';

import {data} from '../../controller/home/data';

//Styled-Components
import {
    TableSC,
    ImgTable,
    StatusSC
} from './styled';

function TableHome() {
    return(
        <TableSC>
            <tr>
                <th>Select</th>
                <th>Photo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Status</th>
                <th>Descripcion</th>
                <th>Last update</th>
                <th>Next action</th>
                <th>Follow up</th>
            </tr>
            {data.map((data, i) => {
                return(
                    <tr>
                        <td><input type="checkbox" name="" id=""/></td>
                        <td><ImgTable src={data.photo} alt="photo"/></td>
                        <td>{data.name}</td>
                        <td>{data.lastName}</td>
                        <td><StatusSC>{data.status}</StatusSC></td>
                        <td>{data.description}</td>
                        <td>{data.lastUpdate}</td>
                        <td>{data.nextAction}</td>
                        <td>{data.followUp}</td>
                    </tr>
                )
            })}
            
        </TableSC> 
    )
}

export default TableHome;