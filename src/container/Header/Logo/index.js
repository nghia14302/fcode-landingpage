import React from 'react';

import logo from '../../../assets/logo.svg';
import { NavLink } from '../../style';
import { StyledLogo, LText } from './logo.style';

const Logo = () => {
    return (
        <NavLink to="/">
            <StyledLogo>
                <img src={logo} alt="Logo"></img>
                <LText>F-Code</LText>
            </StyledLogo>
        </NavLink>
    );
};

export default Logo;
