import React from 'react';

import { Block } from '../style';
import SocialMedia from './SocialMedia';
import { StyledFooter, LText, SText, XSText, Copyright } from './footer.style.js';

const Footer = () => {
    return (
        <StyledFooter>
            <LText>
                Cổng thông tin <Block>F-code</Block>
            </LText>
            <SText>
                Mọi thắc mắc các bạn có thể liên hệ cho chúng mình qua đường link bên dưới
            </SText>
            <SocialMedia></SocialMedia>
            <Copyright>
                <XSText>
                    Host được tài trợ bởi <a href="https://hosting.ltvnshop.com/">LTVNHosting</a>
                </XSText>
                <XSText>
                    Copyright © 2021 by{' '}
                    <a>
                        <Block>F-code</Block>
                    </a>
                </XSText>
            </Copyright>
        </StyledFooter>
    );
};

export default Footer;
