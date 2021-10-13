import React from 'react';

import icons from '../../../../assets/icons';
import {
    ItemsContainer,
    ItemContent,
    ItemTittle,
    ItemIcon,
    ItemDescription,
    ItemDivideLine,
} from './style';

const Items = (props) => {
    return (
        <ItemsContainer
            data-aos="flip-right"
            data-aos-delay={0 + props.index * 150}
            data-aos-duration={600}
            data-aos-anchor-placement="bottom-bottom"
        >
            <ItemContent>
                <ItemIcon src={icons[props.icon]} />
                <ItemTittle>{props.title}</ItemTittle>
                <ItemDivideLine />
                <ItemDescription>{props.description}</ItemDescription>
            </ItemContent>
        </ItemsContainer>
    );
};

export default Items;
