import React from 'react';

import discord from '../../../assets/socialMedia/discord.svg';
import docs from '../../../assets/socialMedia/docs.svg';
import facebook from '../../../assets/socialMedia/facebook.svg';
import youtube from '../../../assets/socialMedia/youtube.svg';
import { StyledSocialMedia } from './socialMedia.style';

const SocialMedia = () => {
    return (
        <StyledSocialMedia>
            <a href="https://www.facebook.com/fcodefpt">
                <img src={facebook} alt="facebook"></img>
            </a>
            <a href="https://www.youtube.com/channel/UCZyrUXSrQ1AdkomxYz1GvCw">
                <img src={youtube} alt="youtube"></img>
            </a>
            <a href="https://discord.f-code.tech">
                <img src={discord} alt="discord"></img>
            </a>
            <a href="https://f-code.tech">
                <img src={docs} alt="docs"></img>
            </a>
        </StyledSocialMedia>
    );
};

export default SocialMedia;
