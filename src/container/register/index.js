import React from 'react';

import icons from '../../assets/icons';
import background from '../../assets/img/register/Frame.svg';
import { get } from './../../utils/apiCaller';
import ProgressBar from './progress';
import {
    RegisterContainer,
    RegisterContent,
    Title,
    Description,
    GoogleButton,
    Icon,
    GoogleIcon,
    Background,
} from './style';

const Register = () => {
    const getData = () => {
        get('/api/auth/google');
    };

    return (
        <RegisterContainer>
            <Background src={background}>
                <RegisterContent>
                    <Title>
                        ĐĂNG KÍ THAM GIA
                        <span> FCODE</span>
                    </Title>
                    <Description>
                        Để trở thành thành viên đầu tiên của FCode, trước hết các bạn phải đăng kí
                        tài khoản qua Gmail FPT
                    </Description>
                    <ProgressBar progress={'1'} />
                    <GoogleButton onClick={getData()}>
                        <Icon>
                            <GoogleIcon src={icons['google.svg']} />
                        </Icon>
                        Login with Google
                    </GoogleButton>
                </RegisterContent>
            </Background>
        </RegisterContainer>
    );
};

export default Register;
