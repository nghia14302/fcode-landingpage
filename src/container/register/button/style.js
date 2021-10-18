import styled from 'styled-components';

// Google button components
export const Button = styled.button`
    display: flex;
    font-family: 'Roboto', 'sans-serif';
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.color};
    justify-content: center;
    align-items: center;
    max-width: 317px;
    max-height: 57px;
    padding: 1rem;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    border-radius: 6px;
    transition: all 0.175s ease-in-out;
    cursor: pointer;
    :hover {
        transform: translate(0, 2px);
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
`;

export const Icon = styled.div``;

export const GoogleIcon = styled.img`
    background-image: url(${(props) => props.src});
    width: 27px;
    margin-right: 1rem;
`;
