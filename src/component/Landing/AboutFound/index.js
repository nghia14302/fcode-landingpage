import React from 'react';

import { StyledAboutFound } from './aboutFound.style';

const AboutFound = (props) => {
    return (
        <StyledAboutFound>
            <div>Câu lạc bộ FCode</div>
            <div>
                FCode được thành lập vào năm 2014, là CLB học thuật đầu tiên tại trường đại học FPT
                HCM. Với mục tiêu ban đầu là tạo ra sân chơi cho các bạn sinh viên ngành kĩ thuật
                phần mềm có đam mê được thỏa sức trao đổi và học tập với nhau. Sau hơn 5 năm hoạt
                động, CLB đã tạo được nhiều sân chơi cho các bạn sinh viên
            </div>
            <div>
                <span style={{ color: '#00d17d' }}>Xem thêm &gt;</span>
            </div>
        </StyledAboutFound>
    );
};

export default AboutFound;
