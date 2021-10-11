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
    padding: 0 4rem;
    margin: 0 auto;
    height: 100%;
`;
// common components
export const Title = styled.h2`
    position: relative;
    font-family: 'Roboto', 'sans-serif';
    font-weight: bold;
    font-size: 4rem;
    text-transform: capitalize;
    margin-bottom: 2.25rem;
`;

export const Description = styled.p`
    font-family: 'Roboto', 'sans-serif';
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.6);
    line-height: 29px;
    margin-bottom: 4.17rem;
`;
// Activities components
