import styled from 'styled-components';

export const StyledFilledButton = styled.div`
    height: 44px;
    width: 98px;

    border-radius: 4px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.1599999964237213px;
    text-align: center;

    background: ${(props) => {
        return props['bg-color'] ? props['bg-color'] : '#00db96';
    }};
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;

    transition: all 0.2s;
    &:hover {
        filter: brightness(95%);
    }
`;
