import styled from 'styled-components';

const StyledFoundLogo = styled.div`
    height: 356px;
    width: 306px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
        0px 3px 5px rgba(0, 0, 0, 0.2);
    padding: 37px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
`;

const Round = styled.div`
    height: 214px;
    width: 214px;
    border-radius: 100%;
    border: 10px solid #00d17d;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
        font-family: Roboto;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1.25px;
    }
`;

const LText = styled.div`
    margin: 0;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 1.25px;
`;

export { StyledFoundLogo, LText, Round };
