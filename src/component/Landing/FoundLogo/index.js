import React from 'react';

import { StyledFoundLogo } from './foundLogo.style';

const FoundLogo = (props) => {
    return (
        <StyledFoundLogo>
            <h1>NĂM THÀNH LẬP</h1>
            <div>
                <span>{props.year || 2014}</span>
            </div>
        </StyledFoundLogo>
    );
};

export default FoundLogo;
