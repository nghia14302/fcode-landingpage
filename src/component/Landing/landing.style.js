import styled from 'styled-components';

export const StyledLanding = styled.div`
    // background: green;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;

    > div:nth-of-type(2) {
        width: 1440px;
        box-sizing: border-box;
        // background: red;
        padding: 25px 100px;
        min-height: 100vh;
        overflow-x: hidden;

        @media (max-width: 1440px) {
            padding: 8px;
            width: 100%;
        }
    }

    @media (max-width: 992px) {
        text-shadow: 0px 0px 5px #cecece;
    }
`;
