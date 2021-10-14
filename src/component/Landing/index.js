import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Foundation from './Foundation';
import Frame1 from './Frame1';
import { StyledLanding, View } from './landing.style';

function Landing() {
    return (
        <StyledLanding>
            <Header></Header>
            <View>
                <Frame1></Frame1>
                <Foundation></Foundation>
                <Footer></Footer>
            </View>
        </StyledLanding>
    );
}

export default Landing;
