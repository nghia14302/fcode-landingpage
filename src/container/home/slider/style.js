import styled from 'styled-components';

import arrows from '../../../assets/components';
import { Content } from '../style';

export const Activities = styled.div`
    width: 100%;
    margin: 4rem 0;
`;

export const ContentsContainer = styled(Content)`
    padding: 0 8rem;
    width: 100%;
    @media screen and (max-width: 1440px) {
        align-items: center;
        padding: 0 4rem;
    }
    @media screen and (max-width: 560px) {
        font-size: 12px;
        padding: 0 1.4rem;
    }
`;
export const SliderContent = styled.div`
    margin: 0 auto;
    @media screen and (max-width: 1440px) {
        align-items: center;
        width: 100%;
        padding: 0 1rem;
    }
`;
export const SubTitle = styled.h6`
    display: block;
    font-family: 'Roboto', 'sans-serif';
    font-style: normal;
    font-weight: bold;
    font-size: 2.25em;
    line-height: 42px;
    letter-spacing: 1.25px;
    width: fit-content;
    margin-bottom: 62px;
    @media screen and (max-width: 1000px) {
        margin-bottom: 2rem;
    }
`;

export const SliderContainer = styled.div`
    position: relative;
    margin: 0 auto 2.31em;
    max-width: 1235px;
    @media screen and (max-width: 1440px) {
        width: 900px;
    }
    @media screen and (max-width: 1000px) {
        width: 430px;
    }
    @media screen and (max-width: 560px) {
        width: auto;
        overflow-x: hidden;
    }
`;

export const Item = styled.img`
    position: relative;
    background: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: contain;
    width: 403px;
    height: 294px;
    margin: 0.5rem;
    @media screen and (max-width: 560px) {
        margin: 0;
        width: 100%;
        height: auto;
    }
`;
export const SlideArrow = styled.div`
    position: absolute;
    display: block;
    background-color: white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease-in-out;

    &::before {
        position: absolute;
        content: '';
        width: 9px;
        height: 14px;
        right: 18px;
        bottom: 14.5px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const LeftArrow = styled(SlideArrow)`
    left: 15px;
    z-index: 999;
    &::before {
        background: url(${arrows['left-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }
    @media screen and (max-width: 520px) {
        display: none;
    }
`;

export const RightArrow = styled(SlideArrow)`
    right: 20px;
    z-index: 999;
    &::before {
        background: url(${arrows['right-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }
    @media screen and (max-width: 1440px) {
        right: 45px;
    }
    @media screen and (max-width: 1000px) {
        right: 25px;
    }
    @media screen and (max-width: 520px) {
        display: none;
    }
`;

export const MoreInfo = styled.a`
    position: relative;
    display: inline-block;
    font-family: 'Roboto', 'sans-serif';
    font-size: 1.5em;
    line-height: 120%;
    color: #00d17d; /* green */
    width: fit-content;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &,
    &::before,
    &::after {
        transition: all 0.4s ease-in-out;
    }
    &::after {
        position: absolute;
        background: url(${arrows['green-arrow.svg']});
        content: '';
        width: 7.41px;
        height: 12px;
        right: -15px;
        top: 9px;
        @media screen and (max-width: 560px) {
            top: 4px;
        }
    }
    &::before {
        position: absolute;
        content: '';
        background-color: #00d17d; /* green */
        bottom: -2px;
        width: 0;
        height: 1px;
        right: 0;
    }
    &:hover {
        &::before {
            left: 0;
            width: 100%;
        }
        &::after {
            right: -20px;
        }
    }
`;
