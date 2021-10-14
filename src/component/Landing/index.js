import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Foundation from './Foundation';
import Frame1 from './Frame1';
import { StyledLanding } from './landing.style';

function Landing() {
    return (
        <StyledLanding>
            <Header data-aos="animation_name"></Header>
            <div>
                <Frame1></Frame1>
                <Foundation></Foundation>
                <Footer></Footer>
            </div>
        </StyledLanding>
    );
}

export default Landing;
