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
`;
export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px;
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
