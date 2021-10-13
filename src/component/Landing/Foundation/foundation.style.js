import styled from 'styled-components';

export const StyledFoundation = styled.div`
    background: transparent;
    display: grid;
    grid-template-columns: 485px 3fr;
    grid-template-rows: 1fr;
    padding-top: 50px;
    height: 50vh;

    > div:nth-of-type(1) {
        display: flex;
        justify-content: center;
    }

    > div:nth-of-type(2) {
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
        padding: 55px 0px;
    }

    @media (max-width: 1200px) {
        grid-template-columns: min-content 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        > div:nth-of-type(1) {
            display: none;
        }
    }
`;
