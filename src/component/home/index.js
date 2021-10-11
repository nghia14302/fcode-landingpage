import React from 'react';

import AOS from 'aos';

import Cards from './cards';
import Slider from './slider';
import { HomeContainer } from './style';

import 'aos/dist/aos.css';

AOS.init({
    // Global settings:
    disable: false,
    debounceDelay: 0, // the delay when resize windows
    throttleDelay: 50, // the delay when scrolling

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // the trigger point (px)
    delay: 0,
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'eas',
    once: true, // render one time or not
    mirror: false, // is animate out when scrolling past them
    anchorPlacement: 'top-bottom', // Which position that the element should be triggered
});

const Home = () => {
    return (
        <HomeContainer>
            <Slider />
            <Cards></Cards>
        </HomeContainer>
    );
};

export default Home;
