import styled from 'styled-components';

export const SectionWrapper = styled.div``;

export const TopContainer = styled.div`
    background-color: rgba(0, 219, 150, 0.03);
`;

export const PageTitle = styled.div`
    max-width: 80%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 200px;
`;

export const PageRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const TitleInfo = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    z-index: 1000;
`;

export const TitleHead = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    color: #262727;
`;

export const TitleSpan = styled.span`
    color: #00d17d;
`;

export const Detail = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    color: rgba(0, 0, 0, 0.6);
    min-width: 400px;
    max-width: 530px;
`;

export const RegisButton = styled.button`
    width: 98px;
    height: 44px;
    left: calc(50% - 98px / 2);
    top: 0px;
    background: #00db96;
    border-radius: 4px;
    border: none;
    color: white;
`;

export const CirclesContainer = styled.div`
    position: relative;
    flex: 0 0 50%;
    max-width: 50%;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

export const CircleWrap = styled.div`
    @media only screen and (max-width: 1440px) {
        transform: scale(0.7);
    }
`;

export const EllipseImg1 = styled.img`
    position: absolute;
    right: 250px;
`;
export const EllipseImg2 = styled.img`
    position: absolute;
    right: 0;
    top: 139px;
`;
export const EllipseImg3 = styled.img`
    position: absolute;
    right: 375px;
    top: 300px;
`;

export const BigCircle = styled.div`
    position: absolute;
    width: 333px;
    height: 333px;
    background: #00d17d;
    border-radius: 100%;
    right: 40px;
`;

export const SmallCircle = styled.div`
    position: absolute;
    width: 172px;
    height: 172px};
    background: #00d17d;
    border-radius: 100%;
    right: 350px;
    top: 400px;
`;

export const TrainC = styled.div`
    margin: auto;
    margin-top: 200px;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 1040px;
    display: flex;
    @media screen only screen and (min-width: 1024px) {
        width: auto;
        flex-direction: column;
    }
`;

export const TrainCImg1 = styled.img``;

export const TrainCInfo = styled.div`
    margin-left: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TrainCText = styled.div`
    width: 520px;
    margin-left: auto;
    margin-bottom: auto;
`;

export const TrainCHead = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 24px;
    color: #262727;
    margin-top: 12px;
    margin-bottom: 35px;
`;

export const TrainCDetail = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    color: rgba(0, 0, 0, 0.6);
`;

export const TrainCBotPic = styled.div`
    display: flex;
    margin-top: auto;
`;

export const TrainCImg2 = styled.img`
    margin-right: 20px;
`;

export const TrainCImg3 = styled.img``;

export const MidContainer = styled.div`
    width: 1240px;
    height: 376px;
    margin: auto;
    position: relative;
    padding-top: 65px;
    padding-bottom: 65px;
`;

export const TBImg = styled.img``;

export const TBInfo = styled.div`
    position: absolute;
    margin-top: 140px;
    margin-left: 100px;
`;

export const TBHead = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 24px;
    color: #ffffff;
    margin: 35px 0px;
`;

export const TBDetail = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    color: #ffffff;
`;

export const BottomContainer = styled.div`
    background-color: rgba(0, 219, 150, 0.03);
`;

export const WorkShopSection = styled.div`
    width: 1080px;
    margin: auto;
    padding-top: 75px;
`;

export const WorkShopInfo = styled.div`
    width: 433px;
    margin-bottom: 50px;
`;

export const WorkShopHead = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 35px;
`;

export const WorkShopDetail = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    color: rgba(0, 0, 0, 0.6);
`;

export const WorkShopImgWrap = styled.div`
    margin: auto;
    display: flex;
`;

export const WorkShopImg1 = styled.img`
    margin-right: auto;
`;

export const WorkShopImg2 = styled.img`
    margin-right: auto;
`;

export const WorkShopImg3 = styled.img``;

export const MoreThings = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: rgba(0, 0, 0, 0.87);
    padding-top: 100px;
    padding-bottom: 75px;
`;
