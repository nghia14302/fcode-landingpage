import React from 'react';

import Image from '../../assets/form/bg.png';
import {
    SectionWrapper,
    FormContainer,
    FormContent,
    ImageContainer,
    FormImage,
    FormTitle,
    FormHead,
    FormDetail,
    FormWrap,
    Label,
    NameInput,
    InputSmall,
    InputSmallLeft,
    OptionContainer,
    Select,
    Option,
    SmallSelect,
    FormLineWrap,
    Input,
    CheckBox,
    SubmitButton,
} from './style.js';

const Form = () => {
    return (
        <SectionWrapper>
            <FormContainer>
                <FormContent>
                    <FormTitle>
                        <FormHead>Đăng kí</FormHead>
                        <FormDetail>
                            Bạn điền đầy đủ các thông tin dưới đây để nhận thử thách sắp tới từ CLB
                            nhé!
                        </FormDetail>
                    </FormTitle>
                    <FormWrap>
                        <Label>Tên</Label>
                        <NameInput>
                            <InputSmallLeft placeholder="Nhập tên của bạn"></InputSmallLeft>
                            <InputSmall placeholder="Nhập họ của bạn"></InputSmall>
                        </NameInput>
                        <Label>Ngành học</Label>
                        <Select>
                            <Option>Kĩ thuật phần mềm</Option>
                            <Option></Option>
                            <Option></Option>
                        </Select>
                        <OptionContainer>
                            <FormLineWrap>
                                <Label>Mã số sinh viên</Label>
                                <InputSmallLeft></InputSmallLeft>
                            </FormLineWrap>
                            <FormLineWrap>
                                <Label>Kì học hiện tại</Label>
                                <SmallSelect>
                                    <Option></Option>
                                    <Option></Option>
                                    <Option></Option>
                                </SmallSelect>
                            </FormLineWrap>
                        </OptionContainer>
                        <Label>Số điện thoại</Label>
                        <Input></Input>
                        <CheckBox type="checkbox" id="confirm" name="confirm"></CheckBox>
                        <Label htmlFor="confirm">Tôi đồng ý tham gia thử thách của CLB FCode</Label>
                    </FormWrap>
                    <SubmitButton>ĐẮNG KÍ</SubmitButton>
                </FormContent>
                <ImageContainer>
                    <FormImage src={Image} draggable="false"></FormImage>
                </ImageContainer>
            </FormContainer>
        </SectionWrapper>
    );
};

export default Form;
