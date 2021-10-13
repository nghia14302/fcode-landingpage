import React from 'react';

import FilledButton from '../FilledButton';
import { StyledAbout } from './about.style';

function About(prop) {
    return (
        <StyledAbout>
            <div>
                <h1>LẬP TRÌNH</h1>
                <h1>TƯƠNG LAI CÙNG</h1>
                <h1>
                    <span style={{ color: '#00D17d' }}>FCODE</span>
                </h1>
            </div>
            <p>
                Tham gia FCode để cùng nhau chia sẻ kiến thức về nhiều khía cạnh trong ngành lập
                trình.
                <br></br>
                Còn chờ gì nữa, nhanh tay đăng kí nào các bạn!
            </p>
            <div>
                <FilledButton bg-color="#00db96">ĐĂNG KÍ</FilledButton>
                <FilledButton bg-color="#33A7ff">TIMELINE</FilledButton>
            </div>
        </StyledAbout>
    );
}

export default About;
