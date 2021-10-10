import styled from 'styled-components';

import arrows from '../../../assets/components';

export const SliderContainer = styled.div`
    width: 100%;
    height: 405px;
    overflow: visible;
`;

export const Item = styled.div`
    background: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: 110% 100%;
    height: 403px;
    border-radius: 12px;
    margin: 0 10px;
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
    left: 5px;

    &::before {
        background: url(${arrows['left-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }
`;

export const RightArrow = styled(SlideArrow)`
    right: 5px;

    &::before {
        background: url(${arrows['right-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }
`;
