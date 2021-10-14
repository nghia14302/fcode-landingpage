import React from 'react';

import logo from '../../../assets/logo.svg';
import { StyledLogo, LText } from './logo.style';

const Logo = () => {
    return (
        <StyledLogo>
            <img src={logo} alt="Logo"></img>
            <LText>FCode</LText>
        </StyledLogo>
    );
};

export default Logo;
