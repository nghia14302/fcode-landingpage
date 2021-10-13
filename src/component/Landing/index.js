import React from 'react';

import Header from '../Header';
import Foundation from './Foundation';
import Frame1 from './Frame1';
import { StyledLanding } from './landing.style';

function Landing() {
    return (
        <StyledLanding>
            <Header></Header>
            <div>
                <Frame1></Frame1>
                <Foundation></Foundation>
            </div>
        </StyledLanding>
    );
}

export default Landing;
