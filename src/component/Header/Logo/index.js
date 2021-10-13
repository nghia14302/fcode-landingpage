import React from 'react';

import logo from '../../../assets/logo.svg';
import { StyledLogo } from './logo.style';

const Logo = (props) => {
    return (
        <StyledLogo>
            <img src={logo} alt="Logo"></img>
            <div>FCode</div>
        </StyledLogo>
    );
};

export default Logo;
