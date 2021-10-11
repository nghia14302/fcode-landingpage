import React from 'react';

import Pic7 from '../../assets/img/activities/background.svg';
import Pic1 from '../../assets/img/activities/pic1.png';
import Pic2 from '../../assets/img/activities/pic2.png';
import Pic3 from '../../assets/img/activities/pic3.png';
import Pic4 from '../../assets/img/activities/pic4.png';
import Pic5 from '../../assets/img/activities/pic5.png';
import Pic6 from '../../assets/img/activities/pic6.png';
import Pic8 from '../../assets/img/activities/pic8.png';
import Pic9 from '../../assets/img/activities/pic9.png';
import Pic10 from '../../assets/img/activities/pic10.png';
// import NavBar from '../../component/navbar';
// import Footer from '../../component/footer';
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
} from './style';

const Activities = () => {
    return (
        <SectionWrapper>
            {/* <NavBar /> */}
            <TopContainer>
                <PageTitle>
                    <PageRow>
                        <TitleInfo>
                            <TitleHead>
                                MỘT SỐ <br /> HOẠT ĐỘNG CỦA CLB
                                <br />
                                <TitleSpan>FCODE</TitleSpan>
                            </TitleHead>
                            <Detail>
                                Đến với FCode các bạn sẽ được tham gia rất nhiều hoạt động bổ ích,
                                cũng như trau dồi thêm được nhiều kinh nghiệp quý giá
                            </Detail>
                            <RegisButton>ĐĂNG KÍ</RegisButton>
                        </TitleInfo>
                        <CirclesContainer>
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
                    <TrainCImg1 src={Pic4} draggable="false"></TrainCImg1>
                    <TrainCInfo>
                        <TrainCText>
                            <TrainCHead>Train-C</TrainCHead>
                            <TrainCDetail>
                                Hoạt động giúp các thành viên trau dồi thêm kĩ năng về lập trình C
                                và cùng team tạo nên nhiều project thực tế.
                            </TrainCDetail>
                        </TrainCText>
                        <TrainCBotPic>
                            <TrainCImg2 src={Pic5} draggable="false"></TrainCImg2>
                            <TrainCImg3 src={Pic6} draggable="false"></TrainCImg3>
                        </TrainCBotPic>
                    </TrainCInfo>
                </TrainC>
            </TopContainer>
            <MidContainer>
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
                    <WorkShopInfo>
                        <WorkShopHead>Workshop</WorkShopHead>
                        <WorkShopDetail>
                            Nơi đây, mọi thành viên chia sẻ và tiếp thu những kinh nghiệm hiểu biết
                            về các lĩnh vực trong ngành lập trình.
                        </WorkShopDetail>
                    </WorkShopInfo>
                    <WorkShopImgWrap>
                        <WorkShopImg1 src={Pic8} draggable="false"></WorkShopImg1>
                        <WorkShopImg2 src={Pic9} draggable="false"></WorkShopImg2>
                        <WorkShopImg3 src={Pic10} draggable="false"></WorkShopImg3>
                    </WorkShopImgWrap>
                    <MoreThings>
                        Và còn rất nhiều hoạt động bổ ích đang chờ các bạn tham gia...
                    </MoreThings>
                </WorkShopSection>
            </BottomContainer>
            {/* <Footer /> */}
        </SectionWrapper>
    );
};

export default Activities;
