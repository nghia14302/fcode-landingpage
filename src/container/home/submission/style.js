import styled from 'styled-components';

import { Content } from '../style';

export const StageInviteBackground = styled.div`
    position: absolute;
    background-color: rgba(0, 219, 150, 0.03); /* green light */
    top: -254px;
    width: 100%;
    height: 1580px;
    @media screen and (max-width: 720px) {
        width: 100%;
        height: 2000px;
    }
`;

export const StageInvite = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const SubmitContainer = styled(Content)`
    position: relative;
    margin: 0 auto;
    padding-top: 12.69rem;
    @media screen and (max-width: 1200px) {
        padding: 4rem;
        margin: 0;
    }
`;

export const StageIntroduction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Stick = styled.div`
    position: absolute;
    background: #c4c4c4; /* gray light */
    width: 14px;
    height: 796px;
    bottom: -90px;
    left: 115px;
    z-index: -1;
    @media screen and (max-width: 1270px) {
        display: none;
    }
`;
