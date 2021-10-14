import React from 'react';

import SocialMedia from './SocialMedia';
import { StyledFooter, LText, SText } from './footer.style.js';

const Footer = () => {
    return (
        <StyledFooter>
            <LText>Cổng thông tin FCode</LText>
            <SText>
                Mọi thắc mắc các bạn có thể liên hệ cho chúng mình qua đường link bên dưới
            </SText>
            <SocialMedia></SocialMedia>
        </StyledFooter>
    );
};

export default Footer;
