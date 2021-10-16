import React, { useState } from 'react';

import Question from '../Question';
import { StyledCollection, Title, About, Container, TitleContainer } from './collection.style';

const Collection = () => {
    const questions = [
        {
            question: 'Các tiêu chí để trở thành một thành viên trong câu lạc bộ?',
            answer: 'Dù đến từ ngành nào bạn cũng có thể tham gia nhé, nếu cảm thấy đây là một môi trường thích hợp cho bạn cùng chia sẻ đam mê lập trình, công nghệ thì F-Code chúng mình luôn chào đón. Nhưng phải vượt qua các thử thách nữa nha.',
        },
        {
            question:
                'Em đến từ một ngành khác như IA, AI, SA, SS,... thì em có thể tham gia hay không?',
            answer: 'Dù đến từ ngành nào bạn cũng có thể tham gia nhé, nếu cảm thấy đây là một môi trường thích hợp cho bạn cùng chia sẻ đam mê lập trình, công nghệ thì F-Code chúng mình luôn chào đón. Nhưng phải vượt qua các thử thách nữa nha.',
        },
        {
            question: 'Trình độ anh văn của em kém. Có vào F-Code được không?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisl mauris, posuere quis velit sed, ultrices sollicitudin erat. Aenean nec purus lorem. Donec massa sem, congue at nisl vel.',
        },
        {
            question:
                'Vào câu lạc bộ em sẽ được những gì và có những hoạt động nào để phát triển hay không?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisl mauris, posuere quis velit sed, ultrices sollicitudin erat. Aenean nec purus lorem. Donec massa sem, congue at nisl vel',
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
