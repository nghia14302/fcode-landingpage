import React from 'react';

import AboutFound from '../AboutFound';
import FoundLogo from '../FoundLogo';
import { StyledFoundation } from './foundation.style';

const Foundation = (props) => {
    return (
        <StyledFoundation>
            <div>
                <FoundLogo></FoundLogo>
            </div>
            <div>
                <AboutFound></AboutFound>
            </div>
        </StyledFoundation>
    );
};

export default Foundation;
