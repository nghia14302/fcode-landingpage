import styled from 'styled-components';

// Container
export const RegisterContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    max-width: 1920px;
    height: 1080px;
    overflow: hidden;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        height: 100vh;
    }
`;
export const Background = styled.div`
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    max-width: 1920px;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    width: 100%;
    height: 100%;
    z-index: -1;
`;
// content components
export const RegisterContent = styled.div`
    font-family: 'Roboto', 'sans-serif';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0 2em;
    text-align: center;
    height: 100%;
    @media only screen and (max-width: 1024px) {
        font-size: 10px;
    }
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 4em;
    margin-bottom: 3.125rem;
    > span {
        color: rgba(0, 219, 150, 1);
    }
`;

export const Description = styled.p`
    font-size: 1.5em;
    max-width: 579px;
    margin-bottom: 3.125em;
`;

export const ProgressBar = styled.div``;

// Google button components
export const GoogleButton = styled.button`
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    max-width: 317px;
    max-height: 57px;
    padding: 1rem;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    border-radius: 6px;
    transition: all 0.3s ease-in-out;

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
