import React from 'react';

import BlankButton from '../BlankButton';
import FilledButton from '../FilledButton';
import { StyledNavBar, NavLink } from './navBar.style';

const NavBar = () => {
    return (
        <StyledNavBar>
            <NavLink to="/">
                <BlankButton>Trang chủ</BlankButton>
            </NavLink>
            <NavLink to="/activities">
                <BlankButton>Hoạt động</BlankButton>
            </NavLink>
            <NavLink to="/timeline">
                <BlankButton>Timeline</BlankButton>
            </NavLink>
            <NavLink to="/faq">
                <BlankButton>FAQ</BlankButton>
            </NavLink>
            <FilledButton>ĐĂNG KÍ</FilledButton>
        </StyledNavBar>
    );
};

export default NavBar;
