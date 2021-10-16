import React from 'react';

import AboutFound from '../AboutFound';
import FoundLogo from '../FoundLogo';
import { StyledFoundation, Left, Right } from './foundation.style';

const Foundation = () => {
    return (
        <StyledFoundation>
            <Left data-aos="fade-up">
                <FoundLogo></FoundLogo>
            </Left>
            <Right data-aos="fade-up">
                <AboutFound></AboutFound>
            </Right>
        </StyledFoundation>
    );
};

export default Foundation;
