import React from 'react';

import { StyledFoundLogo, LText, Round } from './foundLogo.style';

const FoundLogo = (props) => {
    return (
        <StyledFoundLogo>
            <LText>NĂM THÀNH LẬP</LText>
            <Round>
                <span>{props.year || 2014}</span>
            </Round>
        </StyledFoundLogo>
    );
};

export default FoundLogo;
