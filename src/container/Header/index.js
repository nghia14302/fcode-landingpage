import React, { useRef, useState } from 'react';

import Burger from './Burger';
import FillGround from './FillGround';
import Logo from './Logo';
import Menu from './Menu';
import NavBar from './NavBar';
import { StyledHeader, Container } from './header.style';
import { useOnClickOutside } from './hooks';

const Header = () => {
    const [open, setOpen] = useState(false);
    const menu = useRef();

    useOnClickOutside(menu, () => setOpen(false));

    return (
        <Container>
            <StyledHeader ref={menu}>
                <Logo></Logo>
                <NavBar></NavBar>
                <Burger open={open} setOpen={setOpen}></Burger>
                <Menu open={open} setOpen={setOpen}></Menu>
            </StyledHeader>
            <FillGround open={open} setOpen={setOpen}></FillGround>
        </Container>
    );
};

export default Header;
