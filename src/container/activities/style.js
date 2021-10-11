import styled from 'styled-components';

export const SectionWrapper = styled.div``;

export const TopContainer = styled.div`
    margin: 0;
    width: 100%;
    background-color: rgba(0, 219, 150, 0.03);
`;

export const PageTitle = styled.div`
    display: flex;
`;

export const TitleInfo = styled.div`
    padding-top: 250px;
    margin-left: 10%;
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
    width: 530px;
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
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

export const EllipseImg1 = styled.img`
    position: absolute;
    left: 63%;
    top: 190px;
`;
export const EllipseImg2 = styled.img`
    position: absolute;
    left: 68%;
    top: 326px;
`;
export const EllipseImg3 = styled.img`
    position: absolute;
    left: 50%;
    top: 500px;
`;

export const BigCircle = styled.div`
    position: absolute;
    width: 333px;
    height: 333px;
    left: 67%;
    top: 200px;
    background: #00d17d;
    border-radius: 100%;
`;

export const SmallCircle = styled.div`
    position: absolute;
    width: 172px;
    height: 172px};
    left: 57%;
    top: 592px;
    background: #00d17d;
    border-radius: 100%;
`;

export const TrainC = styled.div`
    margin: auto;
    margin-top: 150px;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 1040px;
    display: flex;
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
    ${'' /* color: #ffffff; */}
    margin: 35px 0px;
`;

export const TBDetail = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    ${'' /* color: #ffffff; */}
`;

export const BottomContainer = styled.div``;
