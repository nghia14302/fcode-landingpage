import React from 'react';

import Pic1 from '../../assets/img/activities/pic1.png';
import Pic2 from '../../assets/img/activities/pic2.png';
import Pic3 from '../../assets/img/activities/pic3.png';
// import NavBar from '../../component/navbar';
// import Footer from '../../component/footer';
import {
    SectionWrapper,
    TopContainer,
    MidContainer,
    BottomContainer,
    PageTitle,
    TitleInfo,
    TitleHead,
    TitleSpan,
    Detail,
    RegisButton,
    CirclesContainer,
    EllipseImg1,
    EllipseImg2,
    EllipseImg3,
    BigCircle,
    SmallCircle,
    TrainC,
} from './style';

const Activities = () => {
    return (
        <SectionWrapper>
            {/* <NavBar /> */}
            <TopContainer>
                <PageTitle>
                    <TitleInfo>
                        <TitleHead>
                            MỘT SỐ <br /> HOẠT ĐỘNG CỦA CLB
                            <br />
                            <TitleSpan>FCODE</TitleSpan>
                        </TitleHead>
                        <Detail>
                            Đến với FCode các bạn sẽ được tham gia rất nhiều hoạt động bổ ích, cũng
                            như trau dồi thêm được nhiều kinh nghiệp quý giá
                        </Detail>
                        <RegisButton>ĐĂNG KÍ</RegisButton>
                    </TitleInfo>
                    <CirclesContainer>
                        <BigCircle></BigCircle>
                        <EllipseImg1 src={Pic1}></EllipseImg1>
                        <EllipseImg2 src={Pic2}></EllipseImg2>
                        <SmallCircle></SmallCircle>
                        <EllipseImg3 src={Pic3}></EllipseImg3>
                    </CirclesContainer>
                </PageTitle>
                <TrainC></TrainC>
            </TopContainer>
            <MidContainer></MidContainer>
            <BottomContainer></BottomContainer>
            {/* <Footer /> */}
        </SectionWrapper>
    );
};

export default Activities;
