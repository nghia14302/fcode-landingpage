import React from 'react';

import { StatusContainer, Step, Title, Description, Content } from './style';

const Status = (props) => {
    const { title, step, description } = props.data;
    return (
        <StatusContainer>
            <Step isDone={props.progress >= step ? true : false}>{step}</Step>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
        </StatusContainer>
    );
};

export default Status;
