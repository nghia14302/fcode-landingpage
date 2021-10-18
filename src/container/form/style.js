import styled from 'styled-components';

export const SectionWrapper = styled.div`
    overflow-x: hidden;
`;

export const FormContainer = styled.div`
    padding-top: 100px;
    width: 100%;
    min-height: 100vh;
    display: grid;
    gap: 25px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
`;

export const FormContent = styled.div`
    width: 450px;
    align-items: center;
    margin: auto;
`;

export const FormTitle = styled.div``;

export const FormHead = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    color: #262727;
`;

export const FormDetail = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.6);
`;

export const FormWrap = styled.form`
    margin-top: 50px;
`;

export const Label = styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
`;

export const NameInput = styled.div`
    margin-bottom: 20px;
`;

export const Input = styled.input`
    height: 56px;
    width: 448px;
    border: 1px solid rgba(0, 0, 0, 0.36);
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 26px;
    padding-left: 15px;
    margin-bottom: 20px;
    padding-right: 15px;
    &:focus {
        outline: none;
    }
    ::placeholder {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: rgba(0, 0, 0, 0.36);
    }
`;

export const InputSmallLeft = styled.input`
    width: 211px;
    height: 56px;
    border: 1px solid rgba(0, 0, 0, 0.36);
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 26px;
    padding-left: 15px;
    padding-right: 15px;
    &:focus {
        outline: none;
    }
    ::placeholder {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: rgba(0, 0, 0, 0.36);
    }
`;

export const InputSmall = styled.input`
    width: 211px;
    height: 56px;
    border: 1px solid rgba(0, 0, 0, 0.36);
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 15px;
    padding-right: 15px;
    &:focus {
        outline: none;
    }
    ::placeholder {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: rgba(0, 0, 0, 0.36);
    }
`;

export const OptionContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

export const Select = styled.select`
    width: 448px;
    height: 56px;
    padding-left: 15px;
    padding-right: 15px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.36);
    margin-bottom: 20px;
`;

export const Option = styled.option`
    height: 100px;
`;

export const SmallSelect = styled.select`
    outline: none;
    width: 211px;
    height: 56px;
    border: 1px solid rgba(0, 0, 0, 0.36);
    padding-left: 15px;
    padding-right: 15px;
`;

export const SmallOption = styled.option``;

export const FormLineWrap = styled.div`
    width: 50%;
    margin-right: 13px;
`;

export const CheckBox = styled.input`
    margin-right: 12px;
`;

export const SubmitButton = styled.button`
    width: 448px;
    height: 44px;
    background: #00d17d;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin-top: 50px;
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        filter: brightness(95%);
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    margin-top: auto;
    right: 0;
    @media (max-width: 1200px) {
        display: none;
    }
`;

export const FormImage = styled.object`
    width: 100%;
    height: 100%;
`;
