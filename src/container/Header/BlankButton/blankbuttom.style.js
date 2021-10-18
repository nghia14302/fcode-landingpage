import styled, { keyframes } from 'styled-components';

const ButtonFowardAnim = keyframes`
    1% {
        left: 0;
        width: 0%;
    }
    99% {
        left: 0;
    }
    100% {
        right: 0;
        width: 100%;
    }
`;

const ButtonBackwardAnim = keyframes`
    0% {
        right: 0;
        width: 100%;
    }
    100% {
        right: 0;
        width: 0px;
    }
`;

const StyledBlankButton = styled.div`
    position: relative;
    height: 36px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1.25px;
    color: rgba(0, 0, 0, 0.36);
    position: relative;
    cursor: pointer;
    user-select: none;

    &:after {
        content: '';
        position: absolute;
        height: 1px;
        bottom: 2px;
        width: 0px;
        animation-name: ${ButtonBackwardAnim};
        animation-duration: 0.4s;
        background-color: #0000005c;
    }

    :link,
    :hover,
    :visited,
    :active {
        color: #00d17d;
    }
    &:hover:after {
        background-color: #00d17d;
        animation: ${ButtonFowardAnim} 0.7s;
        animation-fill-mode: forwards;
    }
`;

export { StyledBlankButton, ButtonFowardAnim, ButtonBackwardAnim };
