import React, { useState } from 'react';

import Question from '../Question';
import { StyledCollection, Title, About, Container, TitleContainer } from './collection.style';

const Collection = () => {
    const questions = [
        {
            question: 'Các tiêu chí để trở thành một thành viên trong câu lạc bộ?',
            answer: 'Thái độ tôn trọng mọi người, khả năng tự học và giải quyết vấn đề cũng như kỹ năng làm việc nhóm, biết chia sẻ và không ngại thắc mắc. Kiên trì, sáng tạo và nhiệt huyết.',
        },
        {
            question:
                'Em đến từ một ngành khác như IA, AI, SA, SS,... thì em có thể tham gia hay không?',
            answer: 'Dù đến từ ngành nào bạn cũng có thể tham gia nhé, nếu cảm thấy đây là một môi trường thích hợp cho bạn cùng chia sẻ đam mê lập trình, công nghệ thì F-Code chúng mình luôn chào đón. Nhưng phải vượt qua các thử thách nữa nha.',
        },
        {
            question: 'Trình độ anh văn của em kém. Có vào F-Code được không?',
            answer: 'Bạn vẫn có thể tham gia nếu hiện tại tiếng Anh bạn còn kém, nhưng với lĩnh vực công nghệ thì tiếng Anh là một công cụ quan trọng để nghiên cứu và học tập. Nếu bạn giỏi tiếng Anh thì nguồn tài liệu mà bạn tiếp cận được sẽ lớn hơn rất nhiều và đó là một thế mạnh cho bạn sau này.',
        },
        {
            question:
                'Vào câu lạc bộ em sẽ được những gì và có những hoạt động nào để phát triển hay không?',
            answer: 'Lợi thế lớn nhất đó là các bạn có thêm được những mối quan hệ với các bạn khác cũng như những người đi trước để học tập lẫn nhau những điều hay cũng như chia sẻ những kinh nghiệm, chỉ dẫn trong ngành. Thêm vào đó, câu lạc bộ cũng có các hoạt động sharing, training, làm project do các bạn hoặc các anh chị tổ chức để mọi người cùng rèn luyện và học hỏi từ nhau.',
        },
    ];

    let [open, setOpen] = useState(new Array(4).fill(false));

    const list = questions.map((value, index) => {
        return (
            <Question
                open={open[index]}
                key={index}
                question={value.question}
                answer={value.answer}
                setOpen={() => {
                    let state = new Array(4).fill(false);
                    state[index] = !open[index];
                    setOpen(state);
                }}
            ></Question>
        );
    });

    return (
        <Container data-aos="fade-up">
            <TitleContainer>
                <Title>FAQ</Title>
                <About>
                    Thời gian vừa qua F-Code đã nhận được nhiều câu hỏi hay và thú vị. Hãy cùng
                    chúng mình điểm qua nhé!
                </About>
            </TitleContainer>
            <StyledCollection>{list}</StyledCollection>
        </Container>
    );
};

export default Collection;
