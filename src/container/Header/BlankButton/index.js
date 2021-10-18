import React from 'react';

import { StyledBlankButton } from './blankbuttom.style';

const BlankButton = (props) => {
    return (
        <StyledBlankButton>
            <span>{props.children}</span>
        </StyledBlankButton>
    );
};

export default BlankButton;
