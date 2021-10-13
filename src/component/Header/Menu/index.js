import React from 'react';

import BlankButton from '../BlankButton';
import { StyledMenu } from './menu.style';

const Menu = (props) => {
    return (
        <StyledMenu open={props.open}>
            <BlankButton>Trang chủ</BlankButton>
            <BlankButton>Hoạt động</BlankButton>
            <BlankButton>Timeline</BlankButton>
            <BlankButton>Q&amp;A</BlankButton>
            <BlankButton>ĐĂNG KÍ</BlankButton>
        </StyledMenu>
    );
};

export default Menu;
