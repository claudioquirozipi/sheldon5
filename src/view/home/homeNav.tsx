import * as React from 'react';
import {Link} from 'react-router-dom';

//Components
import GridContainerB from '../grid/gridContainerB';

function HomeNav() {
    return(
        <GridContainerB>
            <h1>Home Nav</h1> 
            <Link to="/home/1">view1</Link>
            <Link to="/home/2">view2</Link>
            <Link to="/home/3">view3</Link>
        </GridContainerB>
    )
}

export default HomeNav;