import React, { useRef, useState } from 'react';

import Burger from './Burger';
import Logo from './Logo';
import Menu from './Menu';
import NavBar from './NavBar';
import { StyledHeader } from './header.style';
import { useOnClickOutside } from './hooks';

const Header = (props) => {
    let [open, setOpen] = useState(false);

    const menu = useRef();
    useOnClickOutside(menu, () => setOpen(false));

    return (
        <StyledHeader ref={menu}>
            <Logo></Logo>
            <NavBar></NavBar>
            <Burger open={open} setOpen={setOpen}></Burger>
            <Menu open={open} setOpen={setOpen}></Menu>
        </StyledHeader>
    );
};

export default Header;
