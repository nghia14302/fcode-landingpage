import React from 'react';

import About from '../About';
import Hero from '../Hero';
import { StyledFrame1 } from './frame1.style';

function Frame1(prop) {
    return (
        <StyledFrame1>
            <div>
                <About></About>
                <Hero></Hero>
            </div>
        </StyledFrame1>
    );
}

export default Frame1;
