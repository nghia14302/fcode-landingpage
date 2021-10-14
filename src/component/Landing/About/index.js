import React, { useEffect } from 'react';

import AOS from "aos";
import FilledButton from '../FilledButton';
import { StyledAbout } from './about.style';
import 'aos/dist/aos.css';

function About(prop) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <StyledAbout>
            <div data-aos="fade-up">
                <h1>LẬP TRÌNH</h1>
                <h1>TƯƠNG LAI CÙNG</h1>
                <h1>
                    <span style={{ color: '#00D17d' }}>FCODE</span>
                </h1>
            </div>
            <p data-aos="fade-up" data-aos-delay="200">
                Tham gia FCode để cùng nhau chia sẻ kiến thức về nhiều khía cạnh trong ngành lập
                trình.
                <br></br>
                Còn chờ gì nữa, nhanh tay đăng kí nào các bạn!
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
                <FilledButton bg-color="#00db96">ĐĂNG KÍ</FilledButton>
                <FilledButton bg-color="#33A7ff">TIMELINE</FilledButton>
            </div>
        </StyledAbout>
    );
}

export default About;
