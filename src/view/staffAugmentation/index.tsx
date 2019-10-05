import * as React from 'react';

//Components
import Button from '../../components/buttons';
//Styled-Components
import {
    ContainerStaffAugmentation, 
    Card
} from './styled';
//Interface
interface iStaffAugmentation {
    data: idata[];
}
interface idata {
    title: string;
    text: string;
    bgImg: any;
}

function StaffAugmentation(props: iStaffAugmentation) {
    const {data} = props;
    return(
        <ContainerStaffAugmentation>

            {data.map((dato:idata) => {
                return(
                    <Card>
                        <img src={dato.bgImg} alt={dato.title}/>
                        <h2>{dato.title}</h2>
                        <p>{dato.text}</p>
                        <div>
                            <Button text="Adquirir" bgColor="#70A1FF" disable={false}/>
                        </div>
                    </Card>
                )
            })}
        </ContainerStaffAugmentation>
        
    )
}

export default StaffAugmentation;