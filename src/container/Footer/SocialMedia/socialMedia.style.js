import styled from 'styled-components';

export const StyledSocialMedia = styled.div`
    width: 350px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 400px) {
        width: 100%;

        > img {
            transform: scale(0.7);
        }
    }
`;
