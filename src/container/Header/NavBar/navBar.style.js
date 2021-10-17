import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #0000005c;
    :visited,
    :active {
        text-decoration: none;
        color: #00d17d;
    }
`;

export const StyledNavBar = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    width: 516px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
        display: none;
    }
`;
