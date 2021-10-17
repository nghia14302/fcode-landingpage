import React from 'react';

import {
    Pic1,
    Pic2,
    Pic3,
    Pic4,
    Pic5,
    Pic6,
    Pic7,
    Pic8,
    Pic9,
    Pic10,
} from '../../assets/img/activities';
import {
    SectionWrapper,
    TopContainer,
    MidContainer,
    BottomContainer,
    PageTitle,
    PageRow,
    TitleInfo,
    TitleHead,
    TitleSpan,
    Detail,
    RegisButton,
    CirclesContainer,
    CircleWrap,
    EllipseImg1,
    EllipseImg2,
    EllipseImg3,
    BigCircle,
    SmallCircle,
    TrainC,
    TrainCImg1,
    TrainCInfo,
    TrainCText,
    TrainCHead,
    TrainCDetail,
    TrainCBotPic,
    TrainCImg2,
    TrainCImg3,
    TBImg,
    TBInfo,
    TBHead,
    TBDetail,
    WorkShopSection,
    WorkShopInfo,
    WorkShopHead,
    WorkShopDetail,
    WorkShopImgWrap,
    WorkShopImg1,
    WorkShopImg2,
    WorkShopImg3,
    MoreThings,
    MoreThingsText,
} from './style';

import 'aos/dist/aos.css';

const Activities = () => {
    return (
        <SectionWrapper>
            <TopContainer>
                <PageTitle>
                    <PageRow>
                        <TitleInfo>
                            <TitleHead data-aos="fade-up">
                                MỘT SỐ <br /> HOẠT ĐỘNG CỦA CLB
                                <br />
                                <TitleSpan>FCODE</TitleSpan>
                            </TitleHead>
                            <Detail data-aos="fade-up">
                                Đến với FCode các bạn sẽ được tham gia rất nhiều hoạt động bổ ích,
                                cũng như trau dồi thêm được nhiều kinh nghiệp quý giá
                            </Detail>
                            <RegisButton data-aos="fade-up">ĐĂNG KÍ</RegisButton>
                        </TitleInfo>
                        <CirclesContainer data-aos="fade-left">
                            <CircleWrap>
                                <BigCircle></BigCircle>
                                <EllipseImg1 src={Pic1} draggable="false"></EllipseImg1>
                                <EllipseImg2 src={Pic2} draggable="false"></EllipseImg2>
                                <SmallCircle></SmallCircle>
                                <EllipseImg3 src={Pic3} draggable="false"></EllipseImg3>
                            </CircleWrap>
                        </CirclesContainer>
                    </PageRow>
                </PageTitle>
                <TrainC>
                    <TrainCImg1
                        src={Pic4}
                        draggable="false"
                        data-aos="fade-right"
                        data-aos-anchor-placement="bottom-bottom"
                    ></TrainCImg1>
                    <TrainCInfo>
                        <TrainCText data-aos="fade-down" data-aos-anchor-placement="bottom-bottom">
                            <TrainCHead>Train-C</TrainCHead>
                            <TrainCDetail>
                                Hoạt động giúp các thành viên trau dồi thêm kĩ năng về lập trình C
                                và cùng team tạo nên nhiều project thực tế.
                            </TrainCDetail>
                        </TrainCText>
                        <TrainCBotPic data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <TrainCImg2 src={Pic5} draggable="false"></TrainCImg2>
                            <TrainCImg3 src={Pic6} draggable="false"></TrainCImg3>
                        </TrainCBotPic>
                    </TrainCInfo>
                </TrainC>
            </TopContainer>
            <MidContainer data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <TBInfo>
                    <TBHead>Team building</TBHead>
                    <TBDetail>
                        CLB hàng năm sẽ tổ chức thường buổi đi chơi dã ngoại giúp các thành viên gắn
                        kết với nhau hơn
                    </TBDetail>
                </TBInfo>
                <TBImg src={Pic7}></TBImg>
            </MidContainer>
            <BottomContainer>
                <WorkShopSection>
                    <WorkShopInfo data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <WorkShopHead>Workshop</WorkShopHead>
                        <WorkShopDetail>
                            Nơi đây, mọi thành viên chia sẻ và tiếp thu những kinh nghiệm hiểu biết
                            về các lĩnh vực trong ngành lập trình.
                        </WorkShopDetail>
                    </WorkShopInfo>
                    <WorkShopImgWrap>
                        <WorkShopImg1
                            src={Pic8}
                            draggable="false"
                            data-aos="zoom-in"
                        ></WorkShopImg1>
                        <WorkShopImg2
                            src={Pic9}
                            draggable="false"
                            data-aos="zoom-in"
                            data-aos-delay="150"
                        ></WorkShopImg2>
                        <WorkShopImg3
                            src={Pic10}
                            draggable="false"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        ></WorkShopImg3>
                    </WorkShopImgWrap>
                </WorkShopSection>
                <MoreThings>
                    <MoreThingsText>
                        Và còn rất nhiều hoạt động bổ ích đang chờ các bạn tham gia...
                    </MoreThingsText>
                </MoreThings>
            </BottomContainer>
        </SectionWrapper>
    );
};

export default Activities;
