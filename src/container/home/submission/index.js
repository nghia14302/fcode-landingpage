import React from 'react';

import { Description, DescriptionContainer, Title } from './../style';
import Items from './items';
import {
    StageInvite,
    SubmitContainer,
    StageIntroduction,
    StageInviteBackground,
    Stick,
} from './style';

const data = [
    {
        icon: 'doc.svg',
        title: 'Đăng kí form',
        time: 'Thời gian: 21/9 - 24/10',
        description: 'Các bạn hãy nhấn nút đăng ký để tham gia thử thách của CLB F-Code ngay nhé!',
        button: 'Đăng kí',
        enable: true,
    },
    {
        icon: 'flag.svg',
        title: 'Thử thách thứ nhất',
        time: 'Thời gian: 21/9 - 24/10',
        description: 'Thử thách sẽ được bật mí vào ngày 1/10',
        details:
            'Ở thử thách đầu tiên các bạn hãy tạo một bản CV ghi đầy đủ những thông tin của bản thân và gửi về mail CLB: FCodemail@gmail.com',
        button: 'Chi tiết',
        enable: false,
    },
    {
        icon: 'flag.svg',
        title: 'Thử thách thứ hai',
        time: 'Thời gian: 21/9 - 24/10',
        description: 'Thử thách sẽ được bật mí vào ngày 1/10',
        button: 'Chi tiết',
        enable: false,
    },
    {
        icon: 'flag.svg',
        title: 'Thử thách thứ ba',
        time: 'Thời gian: 21/9 - 24/10',
        description: 'Thử thách sẽ được bật mí vào ngày 1/10',
        button: 'Chi tiết',
        enable: false,
    },
];

const Submission = () => {
    return (
        <StageInvite>
            <StageInviteBackground />
            <SubmitContainer id="submission">
                <DescriptionContainer>
                    <Title data-aos="fade-left" data-aos-anchor="bottom-bottom">
                        Giai Đoạn Tuyển Chọn
                    </Title>
                    <Description data-aos="fade-left">
                        Để trở thành thành viên chính thức của F-Code, các bạn phải trải qua 4 giai
                        chính
                    </Description>
                </DescriptionContainer>
                <StageIntroduction>
                    {data.map((item, index) => {
                        return (
                            <Items
                                key={index + 'submission'}
                                icon={item.icon}
                                description={item.description}
                                details={item.details}
                                time={item.time}
                                title={item.title}
                                enable={item.enable}
                                button={item.button}
                                index={index}
                            />
                        );
                    })}
                </StageIntroduction>
                <Stick data-aos="fade-up" data-aos-delay="200" />
            </SubmitContainer>
        </StageInvite>
    );
};

export default Submission;
