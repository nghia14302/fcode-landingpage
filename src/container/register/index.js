import React, { useState, useEffect } from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import background from '../../assets/img/register/Frame.svg';
import { get } from '../../utils/apiCaller';
import RegisterButton from './button';
import ProgressBar from './progress';
import { RegisterContainer, RegisterContent, Title, Description, Background } from './style';

const progress = [
    {
        key: 'registration',
        title: 'Đăng kí',
        description: '',
        step: 1,
        isDone: true,
    },
    {
        key: 'verifyMail',
        title: 'Xác nhận Mail',
        description: 'Điền form để xác nhận',
        step: 2,
        isDone: false,
    },
    {
        key: 'Accept',
        title: 'Đã ghi nhận',
        description: '',
        step: 3,
        isDone: false,
    },
];

const Register = () => {
    let localStorage;
    try {
        localStorage = JSON.parse(window.localStorage.getItem('step'));
    } catch (e) {
        localStorage = undefined;
    }
    const [step, setStep] = useState(() => localStorage || 1);
    const location = useLocation();
    const history = useHistory();
    const token = window.localStorage.getItem('token');

    const handleStep = async () => {
        await get('/auth/getStep', {}, { Authorization: token }).then((value) => {
            setStep(value.data.step);
            window.localStorage.setItem('step', JSON.stringify(value.data.step));
        });
    };
    useEffect(() => {
        let url_string = new URLSearchParams(location.search); //window.location.href
        let urlState = url_string.get('success');
        let urlToken = url_string.get('token');

        if (token !== undefined) {
            handleStep();
        }
        if (urlState === 'true') {
            window.localStorage.setItem('token', urlToken);
            history.push('/register');
        }
    }, [ location ]);

    return (
        <RegisterContainer>
            <Background src={background}>
                <RegisterContent>
                    <Title>
                        ĐĂNG KÍ THAM GIA
                        <span> F-Code</span>
                    </Title>
                    <Description>
                        Để tham gia thử thách trở thành thành viên của F-Code, trước hết các bạn tài
                        tài khoản qua Gmail FPT
                    </Description>
                    <ProgressBar progress={step} data={progress} />
                    <RegisterButton step={step} />
                </RegisterContent>
            </Background>
        </RegisterContainer>
    );
};

export default Register;
