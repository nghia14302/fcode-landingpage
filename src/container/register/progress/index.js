import React from 'react';

import Status from './status';
import { ProgressContainer } from './style';

const ProgressBar = (props) => {
    return (
        <ProgressContainer>
            {props.data.map((item) => (
                <Status key={item.key} data={item} />
            ))}
        </ProgressContainer>
    );
};

export default ProgressBar;
