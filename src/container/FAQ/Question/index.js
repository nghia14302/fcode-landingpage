import React from 'react';

import arrow from '../../../assets/FAQ/arrow.svg';
import {
    StyledContainer,
    StyledAns,
    StyledTitle,
    TitleContainer,
    Answer,
    StyledArrow,
} from './question.style';

const Question = (props) => {
    return (
        <StyledContainer>
            <TitleContainer onMouseDown={props.setOpen}>
                <StyledTitle>{props.question}</StyledTitle>
                <StyledArrow open={props.open} alt="arrow" src={arrow} />
            </TitleContainer>
            <StyledAns open={props.open}>
                <Answer>{props.answer}</Answer>
            </StyledAns>
        </StyledContainer>
    );
};

export default Question;
