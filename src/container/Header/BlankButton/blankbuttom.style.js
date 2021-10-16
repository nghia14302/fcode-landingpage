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
    height: 48px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1.25px;
    color: ${(props) => props.color};
    position: relative;
    cursor: pointer;
    user-select: none;

    &:after {
        content: '';
        position: absolute;
        height: 2px;
        bottom: 5px;
        width: 0px;
        animation-name: ${ButtonBackwardAnim};
        animation-duration: 0.4s;
        background-color: #0000005c;
    }

    &:hover:after {
        animation: ${ButtonFowardAnim} 0.7s;
        animation-fill-mode: forwards;
    }
`;

export { StyledBlankButton, ButtonFowardAnim, ButtonBackwardAnim };
