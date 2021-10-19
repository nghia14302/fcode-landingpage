import styled from 'styled-components';

const StyledCollection = styled.div`
    display: flex;
    background: transparent;
    max-width: 630px;
    height: auto;
    flex-direction: column;

    > div {
        border-bottom: 1px solid #b3efd2;
    }
`;

const Title = styled.div`
    font-family: Roboto;
    font-size: clamp(2rem, 1.4285714285714286rem + 2.857142857142857vw, 4rem);
    font-weight: 700;
    letter-spacing: 1.25px;
`;

const About = styled.div`
    font-family: Roboto;
    font-size: clamp(1.125rem, 1.0178571428571428rem + 0.5357142857142857vw, 1.5rem);
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 578px;
    margin: 28px 0px;
`;

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 300px 1fr;
    @media (max-width: 992px) {
    }
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export { StyledCollection, Title, About, Container, TitleContainer };
