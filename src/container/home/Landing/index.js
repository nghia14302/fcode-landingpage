import React from 'react';

import Foundation from './Foundation';
import Frame1 from './Frame1';
import { StyledLanding, View } from './landing.style';

const Landing = () => {
    return (
        <StyledLanding>
            <View>
                <Frame1></Frame1>
                <Foundation></Foundation>
            </View>
        </StyledLanding>
    );
};

export default Landing;
