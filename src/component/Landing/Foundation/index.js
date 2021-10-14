import React, { useEffect } from 'react';

import AOS from 'aos';

import AboutFound from '../AboutFound';
import FoundLogo from '../FoundLogo';
import { StyledFoundation, Left, Right } from './foundation.style';

import 'aos/dist/aos.css';

const Foundation = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <StyledFoundation>
            <Left data-aos="fade-up">
                <FoundLogo></FoundLogo>
            </Left>
            <Right data-aos="fade-up">
                <AboutFound></AboutFound>
            </Right>
        </StyledFoundation>
    );
};

export default Foundation;
