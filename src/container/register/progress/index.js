import React from 'react';

import Status from './status';
import { ProgressContainer } from './style';

const data = [
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
const ProgressBar = (props) => {
    return (
        <ProgressContainer>
            {data.map((item) => (
                <Status key={item.key} data={item} />
            ))}
        </ProgressContainer>
    );
};

export default ProgressBar;
