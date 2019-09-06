import * as React from 'react';

//Styled-Components
import {
    PageSC
} from './styled';

function PageQC(props: any) {
    return(
        <PageSC>
            {props.children}
        </PageSC>

    )
}

export default PageQC;