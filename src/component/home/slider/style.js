import styled from 'styled-components';

import arrows from '../../../assets/components';
import { Content } from '../style';

export const Activities = styled.div`
    max-width: 100%;
    height: 80%;
`;

export const SliderContent = styled(Content)`
    @media screen and (max-width: 1440px) {
        align-items: center;
    }
`;

export const SubTitle = styled.h6`
    display: block;
    font-family: 'Roboto', 'sans-serif';
    font-style: normal;
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 42px;
    letter-spacing: 1.25px;
    width: fit-content;
    margin-bottom: 62px;
`;

export const SliderContainer = styled.div`
    position: relative;
    margin-bottom: 2.31rem;
    @media screen and (max-width: 1440px) {
        max-width: 900px;
    }
    @media screen and (max-width: 1040px) {
        max-width: 450px;
    }
`;

export const Item = styled.div`
    background: url(${(props) => props.src});
    background-repeat: no-repeat;
    width: 403px;
    height: 294px;
    margin: 0 1.7rem;

    @media screen and (max-width: 1440px) {
        
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

    &::before {
        background: url(${arrows['left-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }
`;

export const RightArrow = styled(SlideArrow)`
    right: 38px;

    &::before {
        background: url(${arrows['right-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }
    @media screen and (max-width: 1440px) {
        right: 10px;
    }
`;

export const MoreInfo = styled.a`
    position: relative;
    display: inline-block;
    font-family: 'Roboto', 'sans-serif';
    font-size: 1.5rem;
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
