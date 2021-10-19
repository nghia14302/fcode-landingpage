import styled from 'styled-components';

export const Spirit = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 4rem 0;
    @media screen and (max-width: 560px) {
        font-size: 12px;
        padding: 2rem 0;
    }
`;

export const CardsContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1064px;
    z-index: 0;
    @media screen and (max-width: 1200px) {
        max-width: 600px;
    }
`;
