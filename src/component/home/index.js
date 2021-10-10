import React from 'react';

import Slider from './slider';
import { Activities, Title } from './style';

const Home = () => {
    return (
        <Activities>
            <Title>Một số hình ảnh hoạt động CLB</Title>
            <Slider />
        </Activities>
    );
};

export default Home;
