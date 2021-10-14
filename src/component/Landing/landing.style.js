import styled from 'styled-components';

const StyledLanding = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;

    @media (max-width: 992px) {
        text-shadow: 0px 0px 5px #cecece;
    }
`;

const View = styled.div`
    width: 1440px;
    box-sizing: border-box;
    padding: 25px 100px;
    min-height: 100vh;
    overflow-x: hidden;

    @media (max-width: 1440px) {
        padding: 8px;
        width: 100%;
    }
`;

export { StyledLanding, View };
