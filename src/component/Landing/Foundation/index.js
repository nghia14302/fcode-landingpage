import React, { useEffect } from 'react';

import AOS from "aos";
import AboutFound from '../AboutFound';
import FoundLogo from '../FoundLogo';
import { StyledFoundation } from './foundation.style';
import 'aos/dist/aos.css';

const Foundation = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <StyledFoundation>
            <div data-aos="fade-up">
                <FoundLogo></FoundLogo>
            </div>
            <div data-aos="fade-up">
                <AboutFound></AboutFound>
            </div>
        </StyledFoundation>
    );
};

export default Foundation;
