import React, { useState } from 'react';

import background from '../../assets/img/register/Frame.svg';
import { get } from './../../utils/apiCaller';
import RegisterButton from './button';
import ProgressBar from './progress';
import { RegisterContainer, RegisterContent, Title, Description, Background } from './style';

const progress = [
    {
        key: 'registration',
        title: 'Đăng kí',
        description: '',
        step: '1',
        isDone: true,
    },
    {
        key: 'verifyMail',
        title: 'Xác nhận Mail',
        description: 'Mở mail để xác nhận',
        step: '2',
        isDone: true,
    },
    {
        key: 'Accept',
        title: 'Xác nhận',
        description: '',
        step: '3',
        isDone: false,
    },
];

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
                    <ProgressBar progress={'1'} data={progress} />
                    <RegisterButton getData={getData} step="3" />
                </RegisterContent>
            </Background>
        </RegisterContainer>
    );
};

export default Register;
