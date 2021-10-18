import React from 'react';
import { useHistory } from 'react-router-dom';

import icons from './../../../assets/icons';
import { Button, GoogleIcon, Icon } from './style';

const RegisterButton = (props) => {
    const history = useHistory();

    const LoginGoogle = () => (
        <Button onClick={() => props.getData()} color="white" fontColor="black">
            <Icon>
                <GoogleIcon src={icons['google.svg']} />
            </Icon>
            Đăng nhập với FPT Mail
        </Button>
    );
    const Form = () => (
        <Button color="#00d17d" onClick={() => history.push('/form')} fontColor="white">
            Điền Form xác nhận thông tin
        </Button>
    );

    const Confirm = () => (
        <Button color="#00d17d" onClick={() => history.push('/')} fontColor="white">
            Xác nhận thành công
        </Button>
    );
    switch (props.step) {
        case '1':
            return <LoginGoogle />;
            break;
        case '2':
            return <Form />;
            break;
        case '3':
            return <Confirm />;
            break;
    }
};

export default RegisterButton;
