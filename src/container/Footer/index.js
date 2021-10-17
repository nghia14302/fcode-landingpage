import React from 'react';

import SocialMedia from './SocialMedia';
import { StyledFooter, LText, SText, XSText } from './footer.style.js';

const Footer = () => {
    return (
        <StyledFooter>
            <LText>Cổng thông tin FCode</LText>
            <SText>
                Mọi thắc mắc các bạn có thể liên hệ cho chúng mình qua đường link bên dưới
            </SText>
            <SocialMedia></SocialMedia>
            <XSText>
                Host được tài trợ bởi <a href="https://hosting.ltvnshop.com/">LTVNHosting</a>
            </XSText>
        </StyledFooter>
    );
};

export default Footer;
