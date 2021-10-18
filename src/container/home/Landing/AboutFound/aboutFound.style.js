import styled from 'styled-components';

const StyledAboutFound = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 35px;
    gap: 30px;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

const LText = styled.div`
    font-family: Roboto;
    font-size: clamp(1.5rem, 0.7857142857142858rem + 3.571428571428571vw, 4rem);
    font-weight: 700;
    letter-spacing: 1.25px;
`;

const SText = styled.div`
    font-family: Roboto;
    font-size: clamp(1rem, 0.8571428571428572rem + 0.7142857142857143vw, 1.5rem);
    font-weight: 400;
    max-width: 614px;
`;

const More = styled.div`
    font-family: Roboto;
    font-size: clamp(1rem, 0.8571428571428572rem + 0.7142857142857143vw, 1.5rem);
    font-weight: 400;
    max-width: 614px;
`;

export { StyledAboutFound, LText, SText, More };
