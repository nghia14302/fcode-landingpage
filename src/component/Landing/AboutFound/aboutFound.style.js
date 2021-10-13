import styled from 'styled-components';

export const StyledAboutFound = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 35px;
    gap: 30px;

    > div:nth-of-type(1) {
        font-family: Roboto;
        font-size: clamp(1.5rem, 0.7857142857142858rem + 3.571428571428571vw, 4rem);
        font-weight: 700;
        letter-spacing: 1.25px;
    }

    > div:nth-of-type(2) {
        font-family: Roboto;
        font-size: clamp(1rem, 0.8571428571428572rem + 0.7142857142857143vw, 1.5rem);
        font-weight: 400;
        max-width: 614px;
    }

    > div:nth-of-type(3) {
        font-family: Roboto;
        font-size: clamp(1rem, 0.8571428571428572rem + 0.7142857142857143vw, 1.5rem);
        font-weight: 400;
        max-width: 614px;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`;
