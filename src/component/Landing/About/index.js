import React, { useEffect } from 'react';

import AOS from 'aos';

import FilledButton from '../FilledButton';
import { StyledAbout, LText, SText, BtnContainer } from './about.style';

import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <StyledAbout>
            <div data-aos="fade-up">
                <LText>LẬP TRÌNH</LText>
                <LText>TƯƠNG LAI CÙNG</LText>
                <LText>
                    <span style={{ color: '#00D17d' }}>FCODE</span>
                </LText>
            </div>
            <SText data-aos="fade-up" data-aos-delay="200">
                Tham gia FCode để cùng nhau chia sẻ kiến thức về nhiều khía cạnh trong ngành lập
                trình.
                <br></br>
                Còn chờ gì nữa, nhanh tay đăng kí nào các bạn!
            </SText>
            <BtnContainer data-aos="fade-up" data-aos-delay="400">
                <FilledButton bg-color="#00db96">ĐĂNG KÍ</FilledButton>
                <FilledButton bg-color="#33A7ff">TIMELINE</FilledButton>
            </BtnContainer>
        </StyledAbout>
    );
}

export default About;
