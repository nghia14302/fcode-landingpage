import styled from 'styled-components';

export const ItemsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 2.56rem;
`;

// Icon container
export const IconContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.enable ? '#00d17d' : '#8e8e8e')}; /* green and gray */
    width: 116px;
    height: 116px;
    border-radius: 50%;
    margin-right: 2.56rem;
`;

export const ItemIcon = styled.div`
    position: relative;
    background: url(${(props) => props.src});
    background-size: 100% 100%;
    width: 48px;
    height: 60px;
`;

// form container
export const ItemForm = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    width: 42rem;
    height: 10.25rem;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
        0px 3px 5px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    transition: all 0.4s ease-in-out;

    &:hover {
        transform: translateX(14px);
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 392px;
    height: 120px;
`;

export const FormTitle = styled.h6`
    font-family: 'Roboto', 'sans-serif';
    font-weight: 500;
    font-size: 1.5rem;
    color: ${(props) =>
        props.enable ? '#00d17d' : 'rgba(0, 0, 0, 0.38)'}; /* green  and light gray */
    line-height: 120%;
    margin-bottom: 7px;
`;

export const FormTime = styled.p`
    font-family: 'Roboto', 'sans-serif';
    font-weight: 500;
    font-size: 1.125rem;
    color: rgba(0, 0, 0, 0.6); /* gray */
    line-height: 120%;
    margin-bottom: 10px;
`;

export const FormDescription = styled.p`
    font-family: 'Roboto', 'sans-serif';
    font-size: 1.125rem;
    color: rgba(0, 0, 0, 0.6);
`;

export const FormButton = styled.button`
    display: block;
    font-family: 'Roboto', 'sans-serif';
    font-weight: 500;
    font-size: 14px;
    color: white;
    line-height: 24px;
    visibility: ${(props) => (props.enable ? 'visible' : 'hidden')};
    background: #00db96; /* green */
    border: none;
    border-radius: 4px;
    width: 98px;
    height: 44px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
        transition-delay: 0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.15),
            0 4px 8px rgba(0, 0, 0, 0.15);
    }
`;
