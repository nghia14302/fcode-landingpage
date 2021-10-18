import styled from 'styled-components';

export const PopupOverlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 99;
`;
export const Box = styled.div`
    position: fixed;
    width: 450px;
    height: 200px;
    background: #ffffff;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.14))
        drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2));

    border-radius: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const Content = styled.div`
    align-items: center;
    text-align: center;
    padding-top: 20px;
`;

export const Title = styled.div`
    margin-bottom: 25px;
`;

export const Head = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    color: #00d17d;
    margin-bottom: 15px;
`;

export const Detail = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
`;

export const CloseButton = styled.button`
    width: 98px;
    height: 44px;
    background: #00d17d;
    border-radius: 4px;
    border: none;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    &:hover {
        filter: brightness(95%);
    }
`;

export const Overlay = styled.div`
    position: absolute;
    background-color: rgb(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
`;
