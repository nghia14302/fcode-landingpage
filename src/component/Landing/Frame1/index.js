import React from 'react';

import About from '../About';
import Hero from '../Hero';
import { StyledFrame1, View } from './frame1.style';

function Frame1() {
    return (
        <StyledFrame1>
            <View>
                <About></About>
                <Hero></Hero>
            </View>
        </StyledFrame1>
    );
}

export default Frame1;
