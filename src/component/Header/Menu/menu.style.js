import styled from 'styled-components';

export const StyledMenu = styled.div`
    width: auto;
    height: 100vh;
    position: fixed;
    padding: 48px 64px;
    right: 0;
    border-radius: 0px;
    top: 0;

    display: flex;
    justify-content: flex-start;
    gap: 20px;

    flex-direction: column;
    background: #fff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
        0px 3px 5px rgba(0, 0, 0, 0.2);
    transform: ${(props) => (props.open ? '' : 'translateX(100%)')};
    z-index: 0;
    transition: all 0.5s;
    display: none;
    @media (max-width: 992px) {
        display: block;
    }
`;
