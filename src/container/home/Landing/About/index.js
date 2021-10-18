import React from 'react';

import FilledButton from '../FilledButton';
import { StyledAbout, LText, SText, BtnContainer } from './about.style';

const About = () => {
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
};

export default About;
