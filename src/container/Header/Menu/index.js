import React from 'react';

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
                <BlankButton>Trang chủ</BlankButton>
                <BlankButton>Hoạt động</BlankButton>
                <BlankButton>Timeline</BlankButton>
                <BlankButton>FAQ</BlankButton>
                <FilledButton>ĐĂNG KÍ</FilledButton>
            </BtnContainer>
        </StyledMenu>
    );
};

export default Menu;
