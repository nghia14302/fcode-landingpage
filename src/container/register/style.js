import styled from 'styled-components';

// Container
export const RegisterContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    max-width: 1920px;
    height: 1080px;
    overflow: hidden;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        height: 100vh;
    }
`;
export const Background = styled.div`
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    max-width: 1920px;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    width: 100%;
    height: 100%;
`;
// content components
export const RegisterContent = styled.div`
    font-family: 'Roboto', 'sans-serif';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0 2em;
    text-align: center;
    height: 100%;
    @media only screen and (max-width: 1024px) {
        font-size: 10px;
        padding: 0;
    }
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 4em;
    margin-bottom: 3.125rem;
    > span {
        color: rgba(0, 219, 150, 1);
    }
    @media screen and (max-width: 420px) {
        margin: 1rem;
    }
`;

export const Description = styled.p`
    font-size: 1.5em;
    max-width: 579px;
    margin-bottom: max(2.5em);
    @media screen and (max-width: 420px) {
        margin: 1rem;
    }
`;

export const ProgressBar = styled.div``;
