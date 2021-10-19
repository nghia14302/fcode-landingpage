import styled from 'styled-components';

const StyledLogo = styled.div`
    height: 44px;
    width: 139px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        transform-origin: left;
        transform: scale(0.8);
    }
`;

const LText = styled.div`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 900;
    line-height: 24px;
`;

export { StyledLogo, LText };
