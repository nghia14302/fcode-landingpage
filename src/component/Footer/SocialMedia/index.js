import React from 'react';

import discord from '../../../assets/socialMedia/discord.svg';
import docs from '../../../assets/socialMedia/docs.svg';
import facebook from '../../../assets/socialMedia/facebook.svg';
import youtube from '../../../assets/socialMedia/youtube.svg';
import { StyledSocialMedia } from './socialMedia.style';

const SocialMedia = () => {
    return (
        <StyledSocialMedia>
            <img src={facebook} alt="facebook"></img>
            <img src={youtube} alt="youtube"></img>
            <img src={discord} alt="discord"></img>
            <img src={docs} alt="docs"></img>
        </StyledSocialMedia>
    );
};

export default SocialMedia;
