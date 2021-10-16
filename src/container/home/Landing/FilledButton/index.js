import React from 'react';

import { StyledFilledButton } from './filled.button.style';

const FilledButton = (props) => {
    return <StyledFilledButton bg-color={props['bg-color']}>{props.children}</StyledFilledButton>;
};

export default FilledButton;
