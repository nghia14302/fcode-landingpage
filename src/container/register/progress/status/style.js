import styled from 'styled-components';

export const StatusContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 3.125rem;
    &:not(:nth-child(1)):before {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.12);
        content: '';
        width: 130px;
        height: 1px;
        left: clamp(-230px, -170px, -100px);
        @media screen and (max-width: 1280px) {
            display: none;
        }
    }
    @media screen and (max-width: 500px) {
        margin-bottom: 1.5rem;
    }
`;

export const Step = styled.h6`
    font-family: 'Roboto', 'sans serif';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: white;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.isDone ? '#00db96' : 'rgba(0, 0, 0, 0.36)')};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 8px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 500px) {
        align-items: center;
    }
`;
export const Title = styled.h5`
    font-family: 'Roboto', 'sans serif';
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
`;

export const Description = styled.p`
    font-family: 'Roboto', 'sans serif';
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
`;
