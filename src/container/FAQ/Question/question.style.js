
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    margin-bottom: 2rem;
`;

const StyledAns = styled.div`
    overflow: hidden;
    max-height: ${(props) => (props.open ? '600px' : '0px')};
    transition: ${(props) =>
        props.open ? 'max-height 1s' : 'max-height 1.4s cubic-bezier(0, 1, 0, 1)'};
`;

const Answer = styled.p`
    font-family: Roboto;
    font-size: clamp(0.875rem, 0.8035714285714286rem + 0.35714285714285715vw, 1.125rem);
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 606px;
    max-height: 1000px;
`;

const TitleContainer = styled.div`
    font-family: Roboto;
    font-size: clamp(1.125rem, 1.0178571428571428rem + 0.5357142857142857vw, 1.5rem);
    font-weight: 500;
    line-height: 29px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 90px;
    cursor: pointer;
    @media (max-width: 768px) {
        gap: 20px;
    }
`;

const StyledTitle = styled.p`
    width: 100%;
`;

const StyledArrow = styled.img`
    transform: ${(props) => (props.open ? 'rotate(180deg)' : '')};
    transform-origin: center;
    transition: all 0.3s ease-out;
`;

export { StyledContainer, StyledAns, StyledTitle, TitleContainer, Answer, StyledArrow };
