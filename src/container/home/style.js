import styled from 'styled-components';

export const HomeContainer = styled.div`
    position: relative;
    display: block;
    height: 100vh;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 4em;
    margin: 0 auto;
    height: 100%;
`;
// common components
export const DescriptionContainer = styled.div`
    max-width: 635px;
    @media screen and (max-width: 560px) {
        font-size: 12px;
    }
`;

export const Title = styled.h2`
    position: relative;
    font-family: 'Roboto', 'sans-serif';
    font-weight: bold;
    font-size: 4em;
    text-transform: capitalize;
    margin-bottom: 2.25rem;
    @media screen and (max-width: 560px) {
        margin-bottom: 0.8rem;
    }
`;

export const Description = styled.p`
    font-family: 'Roboto', 'sans-serif';
    font-size: 1.5em;
    color: rgba(0, 0, 0, 0.6);
    line-height: 29px;
    margin-bottom: 4.17em;
`;
// Activities components
