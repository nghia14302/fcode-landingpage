import styled from 'styled-components';

const StyledFooter = styled.div`
    max-width: 1440px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0px 60px;
    gap: 30px;
    margin: 4rem;
    overflow-x: hidden;
    @media (max-width: 768px) {
        margin: 4rem 0;
        padding: 1rem;
        width: 100%;
    }
`;

const LText = styled.div`
    font-family: Roboto;
    font-size: clamp(1.5rem, 0.7857142857142858rem + 3.571428571428571vw, 4rem);
    font-weight: 700;
    letter-spacing: 1.25px;
    margin: 0;
`;

const SText = styled.div`
    font-family: Roboto;
    font-size: clamp(1rem, 0.8571428571428572rem + 0.7142857142857143vw, 1.5rem);
    font-weight: 400;
    width: 614px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const XSText = styled.div`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #00000099;
`;

export { StyledFooter, LText, SText, XSText };
