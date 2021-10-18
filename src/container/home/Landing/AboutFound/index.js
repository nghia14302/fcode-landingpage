import React from 'react';

import { StyledAboutFound, LText, SText, More } from './aboutFound.style';

const AboutFound = () => {
    return (
        <StyledAboutFound>
            <LText>Câu lạc bộ F-Code</LText>
            <SText>
                F-Code được thành lập vào năm 2014, là CLB học thuật đầu tiên tại trường đại học FPT
                HCM. Với mục tiêu ban đầu là tạo ra sân chơi cho các bạn sinh viên ngành kĩ thuật
                phần mềm có đam mê được thỏa sức trao đổi và học tập với nhau. Sau hơn 5 năm hoạt
                động, CLB đã tạo được nhiều sân chơi cho các bạn sinh viên
            </SText>
            <More>
                <span style={{ color: '#00d17d' }}>Xem thêm &gt;</span>
            </More>
        </StyledAboutFound>
    );
};

export default AboutFound;
