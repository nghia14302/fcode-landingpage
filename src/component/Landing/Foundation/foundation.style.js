import styled from 'styled-components';

const StyledFoundation = styled.div`
    background: transparent;
    display: grid;
    grid-template-columns: 485px 3fr;
    grid-template-rows: 1fr;
    padding-top: 50px;
    min-height: 50vh;

    @media (max-width: 1200px) {
        grid-template-columns: min-content 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Left = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Right = styled.div`
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 55px 0px;
`;

export { StyledFoundation, Left, Right };
