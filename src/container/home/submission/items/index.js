import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

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
    FormSubtitle,
    StyledPopup,
    PopupContainer,
    PopupAction,
} from './style';

import 'reactjs-popup/dist/index.css';

const Items = (props) => {
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const openPopup = (isDeatails) => {
        if (isDeatails !== 'Đăng kí') {
            setOpen(true);
        } else {
            history.push('/register');
        }
    };
    const closePopup = () => setOpen(false);
    return (
        <ItemsContainer
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            index={props.index}
        >
            <IconContainer enable={props.enable}>
                <ItemIcon src={icons[props.icon]} />
            </IconContainer>
            <ItemForm enable={props.enable}>
                <DescriptionContainer>
                    <FormTitle enable={props.enable} fontsize="1.5rem">
                        {props.title}
                    </FormTitle>
                    <FormTime fontsize="1.125rem">{props.time}</FormTime>
                    <FormDescription fontsize="1.125rem">{props.description}</FormDescription>
                </DescriptionContainer>
                <StyledPopup
                    closeOnDocumentClick
                    closeOnEscape
                    modal={true}
                    open={open}
                    onClose={closePopup}
                >
                    <PopupContainer data-aos="fade-down" data-aos-duration={500}>
                        <FormTitle enable={props.enable} fontsize="2.25em">
                            {props.title}
                        </FormTitle>
                        <FormTime fontsize="1rem">{props.time}</FormTime>
                        <FormSubtitle fontsize="1.125em">Mô tả</FormSubtitle>
                        <FormDescription fontsize="1.125em">{props.details}</FormDescription>
                        <FormSubtitle>Thông tin chi tiết vui lòng liên hệ fanpage</FormSubtitle>
                        <PopupAction>
                            <FormButton enable={true} onClick={() => closePopup()}>
                                Đã Hiểu
                            </FormButton>
                        </PopupAction>
                    </PopupContainer>
                </StyledPopup>
                <FormButton enable={props.enable} onClick={() => openPopup(props.button)}>
                    {props.button}
                </FormButton>
            </ItemForm>
        </ItemsContainer>
    );
};

export default Items;
