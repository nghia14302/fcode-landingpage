import React from 'react';

import SocialMedia from './SocialMedia';
import { StyledFooter } from './footer.style.js';

const Footer = () => {
    return (
        <StyledFooter>
            <h1>Cổng thông tin FCode</h1>
            <p>Mọi thắc mắc các bạn có thể liên hệ cho chúng mình qua đường link bên dưới</p>
            <SocialMedia></SocialMedia>
        </StyledFooter>
    );
};

export default Footer;
