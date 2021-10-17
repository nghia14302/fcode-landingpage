import React from 'react';

import { NavLink } from '../../style';
import BlankButton from '../BlankButton';
import FilledButton from '../FilledButton';
import Logo from '../Logo';
import { StyledMenu, LogoContainer, BtnContainer } from './menu.style';

const Menu = (props) => {
    return (
        <StyledMenu open={props.open}>
            <LogoContainer>
                <Logo></Logo>
            </LogoContainer>
            <BtnContainer>
                <NavLink to="/" onClick={() => props.setOpen(false)}>
                    <BlankButton>Trang chủ</BlankButton>
                </NavLink>
                <NavLink to="/activities" onClick={() => props.setOpen(false)}>
                    <BlankButton>Hoạt động</BlankButton>
                </NavLink>
                <NavLink to="/timeline" onClick={() => props.setOpen(false)}>
                    <BlankButton>Timeline</BlankButton>
                </NavLink>
                <NavLink to="/faq" onClick={() => props.setOpen(false)}>
                    <BlankButton>FAQ</BlankButton>
                </NavLink>
                <NavLink NavLink to="/register" onClick={() => props.setOpen(false)}>
                    <FilledButton>ĐĂNG KÍ</FilledButton>
                </NavLink>
            </BtnContainer>
        </StyledMenu>
    );
};

export default Menu;
