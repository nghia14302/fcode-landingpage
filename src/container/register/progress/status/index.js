import React from 'react';

import { StatusContainer, Step, Title, Description, Content } from './style';

const Status = (props) => {
    const { title, step, description, isDone } = props.data;

    return (
        <StatusContainer>
            <Step isDone={isDone}>{step}</Step>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
        </StatusContainer>
    );
};

export default Status;
