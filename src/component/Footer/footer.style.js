import styled from 'styled-components';

export const StyledFooter = styled.div`
    width: 1440px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0px 60px;

    @media (max-width: 768px) {
        padding: 0;
        width: 100%;
    }

    > h1 {
        font-family: Roboto;
        font-size: clamp(1.5rem, 0.7857142857142858rem + 3.571428571428571vw, 4rem);
        font-weight: 700;
        letter-spacing: 1.25px;
        margin: 0;
    }

    > p {
        font-family: Roboto;
        font-size: clamp(1rem, 0.8571428571428572rem + 0.7142857142857143vw, 1.5rem);
        font-weight: 400;
        width: 614px;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;
