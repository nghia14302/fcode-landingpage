import React from 'react';

import { Box, Content, Title, Head, Detail, CloseButton, Overlay, PopupOverlay } from './style.js';

const Missing = (props) => {
    return (
        <Content>
            <Title>
                <Head>Đăng kí thất bại</Head>
                <Detail>Bạn chưa điền đầy đủ thông tin</Detail>
            </Title>
            <CloseButton onClick={props.close}>ĐÃ HIỂU</CloseButton>
        </Content>
    );
};
const NotConfirmed = (props) => {
    return (
        <Content>
            <Title>
                <Head>Đăng kí thất bại</Head>
                <Detail>Bạn chưa đồng ý tham gia thử thách</Detail>
            </Title>
            <CloseButton onClick={props.close}>ĐÃ HIỂU</CloseButton>
        </Content>
    );
};
const Success = (props) => {
    return (
        <Content>
            <Title>
                <Head>Đăng kí thành công</Head>
                <Detail>Bạn hãy chờ thông báo tiếp theo từ CLB nhé</Detail>
            </Title>
            <CloseButton onClick={props.close}>ĐÃ HIỂU</CloseButton>
        </Content>
    );
};

const Popup = (props) => {
    const renderSwitch = (param) => {
        switch (param) {
            case 'missing':
                return <Missing close={props.close}></Missing>;
            case 'notConfirmed':
                return <NotConfirmed close={props.close}></NotConfirmed>;
            case 'success':
                return <Success close={props.close}></Success>;
        }
    };
    return (
        <PopupOverlay>
            <Overlay onClick={props.close}></Overlay>
            <Box data-aos="fade-down">{renderSwitch(props.type)}</Box>
        </PopupOverlay>
    );
};

export default Popup;
