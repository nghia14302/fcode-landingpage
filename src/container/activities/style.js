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
    max-width: 1240px;
`;

export const PageRow = styled.div`
    flex-wrap: wrap;
    @media only screen and (min-width: 1160px) {
        display: flex;
    }
`;

export const TitleInfo = styled.div`
    flex: 0 0 50%;
    z-index: 1000;
    @media only screen and (min-width: 1160px) {
        max-width: 50%;
    }
`;

export const TitleHead = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    color: #262727;
    margin-bottom: 50px;
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
    margin-bottom: 50px;
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
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; //comment for bug fixxing
    &:hover {
        filter: brightness(95%);
    }
`;

export const CirclesContainer = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    @media only screen and (max-width: 1160px) {
        display: none;
    }
`;

export const CircleWrap = styled.div`
    position: relative;
    width: 100%;
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
    height: 172px;
    background: #00d17d;
    border-radius: 100%;
    right: 350px;
    top: 400px;
`;

export const TrainC = styled.div`
    margin: auto;
    margin-top: 200px;
    padding-top: 100px;
    padding-bottom: 200px;
    max-width: 1040px;
    display: flex;
    min-height: 521px;
    @media only screen and (max-width: 620px) {
        min-height: 850px;
        padding-bottom: 400px;
    }
`;

export const TrainCImg1 = styled.img`
    @media only screen and (max-width: 1040px) {
        display: none;
    }
`;

export const TrainCInfo = styled.div`
    margin-left: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TrainCText = styled.div`
    max-width: 520px;
    margin-bottom: auto;
    margin-left: auto;
    @media only screen and (max-width: 1040px) {
        margin-right: auto;
    }
    @media only screen and (max-width: 620px) {
        margin-bottom: 50px;
    }
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
    @media only screen and (max-width: 1040px) {
        margin: auto;
    }
    @media only screen and (max-width: 620px) {
        flex-direction: column;
    }
`;

export const TrainCImg2 = styled.img`
    margin-right: 20px;
    @media only screen and (max-width: 620px) {
        margin: auto;
        width: 85%;
        height: 85%;
        margin-bottom: 50px;
    }
`;

export const TrainCImg3 = styled.img`
    @media only screen and (max-width: 620px) {
        margin: auto;
        width: 85%;
        height: 85%;
    }
`;

export const MidContainer = styled.div`
    max-width: 1240px;
    margin: auto;
    position: relative;
    margin-top: 65px;
    margin-bottom: 65px;
`;

export const TBImg = styled.img`
    max-width: 100%;
    height: auto;
`;

export const TBInfo = styled.div`
    position: absolute;
    top: 27%;
`;

export const TBHead = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 24px;
    color: #ffffff;
    margin-bottom: 2%;
    margin-left: 5%;
    @media only screen and (max-width: 1240px) {
        font-size: 5vw;
    }
`;

export const TBDetail = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    color: #ffffff;
    margin-left: 5%;
    @media only screen and (max-width: 1240px) {
        font-size: 2vw;
    }
`;

export const BottomContainer = styled.div`
    background-color: rgba(0, 219, 150, 0.03);
`;

export const WorkShopSection = styled.div`
    max-width: 1024px;
    margin: auto;
    padding-top: 200px;
`;

export const WorkShopInfo = styled.div`
    width: 433px;
    margin-bottom: 50px;
    @media only screen and (max-width: 1030px) {
        margin-left: 50px;
    }
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
    flex-direction: column;
    @media only screen and (min-width: 1030px) {
        flex-direction: row;
    }
`;

export const WorkShopImg1 = styled.img`
    margin-right: auto;
    @media only screen and (max-width: 1030px) {
        width: 80%;
        height: 80%;
        margin: auto;
        margin-bottom: 20px;
    }
`;

export const WorkShopImg2 = styled.img`
    margin-right: auto;
    @media only screen and (max-width: 1030px) {
        width: 80%;
        height: 80%;
        margin: auto;
        margin-bottom: 20px;
    }
`;

export const WorkShopImg3 = styled.img`
    @media only screen and (max-width: 1030px) {
        width: 80%;
        height: 80%;
        margin: auto;
    }
`;

export const MoreThings = styled.div`
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

export const MoreThingsText = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: rgba(0, 0, 0, 0.87);
    padding-top: 100px;
    padding-bottom: 75px;
`;
