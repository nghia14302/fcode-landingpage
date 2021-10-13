import styled from 'styled-components';

export const ItemsContainer = styled.div`
    background: #00d17d; /* green */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 20.375rem;
    height: 31.25rem;
    border-radius: 12px;
    padding: 4.625em 2.4em;
    margin: 0 1.01rem 2rem 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
        0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
    &:hover {
        transition-delay: 0s !important;
        transform: translateY(-12px) !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.15),
            0 4px 8px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.15);
    }
`;
export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px;
    text-align: center;
`;

export const ItemIcon = styled.div`
    background: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 71px;
    height: 71px;
    margin-bottom: 2.08rem;
`;
export const ItemTittle = styled.h6`
    font-family: 'Roboto', 'sans-serif';
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    line-height: 1.5rem;
    margin-bottom: 2.08rem;
`;

export const ItemDivideLine = styled.div`
    background-color: white;
    width: 124px;
    height: 1px;
`;
export const ItemDescription = styled.p`
    font-family: 'Roboto', 'sans-serif';
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: white;
    margin-top: 5.41em;
`;
