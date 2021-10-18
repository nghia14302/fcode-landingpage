import React, { useState } from 'react';

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
    const [data, setData] = useState({});
    const getData = async () => {
        let resppone = await get('/auth/google')
            .then((r) => {
                setData(r);
                return r;
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(resppone);
    };

    return (
        <RegisterContainer>
            <Background src={background}>
                <RegisterContent>
                    <Title>
                        ĐĂNG KÍ THAM GIA
                        <span> F-Code</span>
                    </Title>
                    <Description>
                        Để trở thành thành viên đầu tiên của F-Code, trước hết các bạn phải đăng kí
                        tài khoản qua Gmail FPT
                    </Description>
                    <ProgressBar progress={'1'} />
                    <GoogleButton onClick={() => getData()}>
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
