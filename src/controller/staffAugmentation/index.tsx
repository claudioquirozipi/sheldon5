import * as React from 'react';

//Components
import StaffAugmentation from '../../view/staffAugmentation';

//Data 
import {data} from './data';

function ControllerStaffAugmentation() {
    return(
        <StaffAugmentation data={data} />
    )
}

export default ControllerStaffAugmentation;