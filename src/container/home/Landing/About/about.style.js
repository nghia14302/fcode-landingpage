import styled from 'styled-components';

const StyledAbout = styled.div`
    overflow: hidden;
    color: #262727;
    display: flex;
    flex-direction: column;
    gap: 25px;
    z-index: 1;
`;

const LText = styled.div`
    width: 100%;
    font-family: Roboto;
    font-size: clamp(1.5rem, 0.6428571428571428rem + 4.285714285714286vw, 4.5rem);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
`;

const SText = styled.div`
    font-family: Roboto;
    font-size: clamp(1rem, 0.8571428571428572rem + 0.7142857142857143vw, 1.5rem);
    font-weight: 400;
    line-height: 29px;
    max-width: 532px;
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 25px 0px;
`;

export { StyledAbout, LText, SText, BtnContainer };
