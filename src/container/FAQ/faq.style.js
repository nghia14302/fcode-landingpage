import styled from 'styled-components';

const StyledContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 4fr 1fr;
    box-sizing: border-box;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

const Hero = styled.object`
    position: absolute;
    right: 60px;
    z-index: -1;
    transform-origin: right;
    align-self: center;

    @media (max-width: 1200px) {
        left: 50%;
    }
`;

const CollectionContaier = styled.div`
    margin: 0px 245px;
    display: flex;
    align-items: center;
    @media (max-width: 1440px) {
        margin: 0px 60px;
    }
    @media (max-width: 992px) {
        margin: 8px;
        > div {
            width: 100%;
        }
    }
`;

export { StyledContainer, Hero, CollectionContaier };
