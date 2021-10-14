import styled from 'styled-components';

const StyledFrame1 = styled.div`
    width: 100%;
`;

const View = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 4fr 1fr;
    box-sizing: border-box;
    padding: 160px 0px;
    position: relative;

    @media (max-width: 576px) {
        grid-template-columns: 4fr 1fr;
    }

    > object {
        position: absolute;
        right: -100px;
        top: 100px;
        @media (max-width: 768px) {
            left: 0px;
            top: 0px;
        }
    }
`;

export { StyledFrame1, View };
