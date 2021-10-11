import React from 'react';

import Pic1 from '../../assets/img/activities/pic1.png';
import Pic2 from '../../assets/img/activities/pic2.png';
import Pic3 from '../../assets/img/activities/pic3.png';
import Pic4 from '../../assets/img/activities/pic4.png';
import Pic5 from '../../assets/img/activities/pic5.png';
import Pic6 from '../../assets/img/activities/pic6.png';
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
                        <EllipseImg1 src={Pic1} draggable="false"></EllipseImg1>
                        <EllipseImg2 src={Pic2} draggable="false"></EllipseImg2>
                        <SmallCircle></SmallCircle>
                        <EllipseImg3 src={Pic3} draggable="false"></EllipseImg3>
                    </CirclesContainer>
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
                <TBImg></TBImg>
                <TBInfo>
                    <TBHead>Team building</TBHead>
                    <TBDetail>
                        CLB hàng năm sẽ tổ chức thường buổi đi chơi dã ngoại giúp các thành viên gắn
                        kết với nhau hơn
                    </TBDetail>
                </TBInfo>
            </MidContainer>
            <BottomContainer></BottomContainer>
            {/* <Footer /> */}
        </SectionWrapper>
    );
};

export default Activities;
