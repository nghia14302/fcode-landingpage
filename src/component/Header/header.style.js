import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: 100%;
    height: 64px;
    position: sticky;
    top: 0px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 64px;
    align-items: center;
    background: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media (max-width: 1440px) {
        padding: 8px;
    }
`;
