import styled from 'styled-components';

export const StyledLogo = styled.div`
    height: 44px;
    width: 139px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        width: 75px;
        font-weight: 400;
    }

    @media (max-width: 768px) {
        transform-origin: left;
        transform: scale(0.8);
    }
`;
