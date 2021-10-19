import React from 'react';

import SocialMedia from './SocialMedia';
import { StyledFooter, LText, SText, XSText, Copyright } from './footer.style.js';

const Footer = () => {
    return (
        <StyledFooter>
            <LText>Cổng thông tin F-Code</LText>
            <SText>
                Mọi thắc mắc các bạn có thể liên hệ cho chúng mình qua đường link bên dưới
            </SText>
            <SocialMedia></SocialMedia>
            <Copyright>
                <XSText>
                    Host được tài trợ bởi <a href="https://hosting.ltvnshop.com/">LTVNHosting</a>
                </XSText>
                <XSText>
                    Copyright © 2021 by <a>F-code</a>
                </XSText>
            </Copyright>
        </StyledFooter>
    );
};

export default Footer;
