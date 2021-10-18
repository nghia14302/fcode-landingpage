import React from 'react';

import hero from '../../assets/FAQ/hero.svg';
import Collection from './Collection';
import { StyledContainer, Hero, CollectionContaier } from './faq.style';

const FAQ = () => {
    return (
        <StyledContainer>
            <CollectionContaier>
                <Collection></Collection>
            </CollectionContaier>
            <Hero data={hero} />
        </StyledContainer>
    );
};

export default FAQ;
