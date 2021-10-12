import styled from 'styled-components';

import { Content } from '../style';

export const StageInviteBackground = styled.div`
    position: absolute;
    background-color: rgba(0, 219, 150, 0.13); /* green light */
    top: -324px;
    width: 100%;
    height: 130%;
`;

export const StageInvite = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const SubmitContainer = styled(Content)`
    position: relative;
    margin: 0 12.69rem;
    padding-top: 12.69rem;
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
    bottom: -50px;
    left: 115px;
    z-index: -1;
`;
