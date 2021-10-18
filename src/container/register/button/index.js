import React from 'react';

import { useHistory } from 'react-router-dom';

import { API_URL } from '../../../config';
import icons from './../../../assets/icons';
import { Button, GoogleIcon, Icon, Link } from './style';

const RegisterButton = (props) => {
    const history = useHistory();
    const ApiUrl = API_URL + '/auth/google';

    const handleError = () => {
        window.localStorage.clear();
        history.push('/');
    };

    const LoginGoogle = () => (
        <Link href={ApiUrl}>
            <Button color="white" fontColor="black">
                <Icon>
                    <GoogleIcon src={icons['google.svg']} />
                </Icon>
                Đăng nhập với FPT Mail
            </Button>
        </Link>
    );
    const Form = () => (
        <Button color="#00d17d" onClick={() => history.push('/form')} fontColor="white">
            Điền Form xác nhận thông tin
        </Button>
    );

    const Confirm = () => (
        <Button color="#00d17d" onClick={() => history.push('/')} fontColor="white">
            Về trang chủ
        </Button>
    );
    switch (props.step) {
        case 1:
            return <LoginGoogle />;
        case 2:
            return <Form />;
        case 3:
            return <Confirm />;
        default:
            return <Button onClick={handleError}>Có lỗi xảy ra, Về trang chủ nhé!</Button>;
    }
};

export default RegisterButton;
