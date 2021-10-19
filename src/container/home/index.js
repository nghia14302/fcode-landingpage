import React from 'react';

import Landing from './Landing';
import Cards from './cards';
import Slider from './slider';
import { HomeContainer } from './style';
import Submission from './submission';

import 'aos/dist/aos.css';

const Home = () => {
    return (
        <HomeContainer>
            <Landing />
            <Slider />
            <Cards />
            <Submission />
        </HomeContainer>
    );
};

export default Home;
