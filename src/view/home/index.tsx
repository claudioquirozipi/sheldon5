import * as React from 'react';

//Components

import TableHome from './tableHome';

//Styled-Components
import {
    CardHomeSC
} from './styled';

function Home() {
    return(
        
        <CardHomeSC>

            <TableHome />
        </CardHomeSC>
        
    )
}

export default Home;

