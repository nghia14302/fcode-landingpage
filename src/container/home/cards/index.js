import React from 'react';

import { Block } from '../../style';
import { DescriptionContainer, Description, Title, Content } from '../style';
import Items from './items';
import { CardsContainer, Spirit } from './style';

const data = [
    {
        icon: 'fire.svg',
        title: 'Nhiệt Huyết',
        description: 'Nhiệt huyết tham gia các hoạt động, cống hiến hết mình vì CLB',
    },
    {
        icon: 'book.svg',
        title: 'Chia Sẻ',
        description: 'Có tinh thần học hỏi, sẵn sàng chia sẻ kiến thức tới mọi người',
    },
    {
        icon: 'hand.svg',
        title: 'Tôn Trọng',
        description: 'Sẵn sàng giúp đỡ và tôn trọng các thành viên trong CLB',
    },
    {
        icon: 'person.svg',
        title: 'Trách Nhiệm',
        description: 'Có trách nhiệm, dám thử thách bản thân, kiên trì, không bỏ cuộc',
    },
];

const Cards = () => {
    return (
        <Spirit>
            <Content>
                <DescriptionContainer>
                    <Title data-aos="fade-up">
                        Tinh Thần <Block>F-Code</Block>
                    </Title>
                    <Description data-aos="fade-up">
                        Tinh thần của mỗi thành viên sẽ đóng vai trò rất quan trọng để xây dựng một
                        tập thể lớn mạnh
                    </Description>
                </DescriptionContainer>
                <CardsContainer>
                    {data.map((item, index) => {
                        return (
                            <Items
                                key={index + 'cardItems'}
                                index={index}
                                title={item.title}
                                icon={item.icon}
                                description={item.description}
                            />
                        );
                    })}
                </CardsContainer>
            </Content>
        </Spirit>
    );
};

export default Cards;
