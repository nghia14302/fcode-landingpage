import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LandingContainer = styled.div`
    min-width: 100vw;
    min-height: 100vh;
`;
export const NavLink = styled(Link)`
    text-decoration: none;
    color: #00d17d;
    :visited,
    :active {
        text-decoration: none;
        color: #00d17d;
    }
`;
