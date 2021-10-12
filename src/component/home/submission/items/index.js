import React from 'react';

import icons from '../../../../assets/icons';
import {
    IconContainer,
    ItemForm,
    ItemIcon,
    ItemsContainer,
    FormTitle,
    FormTime,
    FormDescription,
    DescriptionContainer,
    FormButton,
} from './style';

const Items = (props) => {
    return (
        <ItemsContainer
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            index={props.index}
        >
            <IconContainer enable={props.enable}>
                <ItemIcon src={icons[props.icon]} />
            </IconContainer>
            <ItemForm>
                <DescriptionContainer>
                    <FormTitle enable={props.enable}>{props.title}</FormTitle>
                    <FormTime>{props.time}</FormTime>
                    <FormDescription>{props.description}</FormDescription>
                </DescriptionContainer>
                <FormButton enable={props.enable}>{props.button}</FormButton>
            </ItemForm>
        </ItemsContainer>
    );
};

export default Items;
