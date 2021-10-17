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
                            <InputSmallLeft
                                type="text"
                                id="lname"
                                name="lastname"
                                placeholder="Nhập tên của bạn"
                            ></InputSmallLeft>
                            <InputSmall
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Nhập họ của bạn"
                            ></InputSmall>
                        </NameInput>
                        <Label htmlFor="spec">Ngành học</Label>
                        <Select id="spec" name="spec">
                            <Option value="Kĩ thuật phần mềm">Kĩ thuật phần mềm</Option>
                            <Option value="Trí tuệ nhân tạo">Trí tuệ nhân tạo</Option>
                            <Option value="An toàn thông tin">An toàn thông tin</Option>
                            <Option value="Hệ thống thông tin">Hệ thống thông tin</Option>
                            <Option value="IoT (Internet of Things)">
                                IoT (Internet of Things)
                            </Option>
                            <Option value="hiết kế Mỹ thuật số">Thiết kế Mỹ thuật số</Option>
                            <Option value="Kinh doanh quốc tế">Kinh doanh quốc tế</Option>
                            <Option value="Quản trị kinh doanh">Quản trị kinh doanh</Option>
                            <Option value="Truyền thông đa phương tiện">
                                Truyền thông đa phương tiện
                            </Option>
                            <Option value="Digital Marketing">Digital Marketing</Option>
                            <Option value="Quản trị dịch vụ du lịch & lữ hành">
                                Quản trị dịch vụ du lịch & lữ hành
                            </Option>
                            <Option value="Quản trị khách sạn">Quản trị khách sạn</Option>
                            <Option value="Ngôn ngữ Anh">Ngôn ngữ Anh</Option>
                            <Option value="Ngôn ngữ Nhật">Ngôn ngữ Nhật</Option>
                            <Option value="Ngôn ngữ Hàn Quốc">Ngôn ngữ Hàn Quốc</Option>
                        </Select>
                        <OptionContainer>
                            <FormLineWrap>
                                <Label>Mã số sinh viên</Label>
                                <InputSmallLeft
                                    type="text"
                                    id="studentId"
                                    name="studentId"
                                    placeholder="SE170000"
                                ></InputSmallLeft>
                            </FormLineWrap>
                            <FormLineWrap>
                                <Label htmlFor="sem">Kì học hiện tại</Label>
                                <SmallSelect id="sem">
                                    <Option value="LUK1">LUK1</Option>
                                    <Option value="LUK2">LUK2</Option>
                                    <Option value="LUK3">LUK3</Option>
                                    <Option value="LUK4">LUK4</Option>
                                    <Option value="LV5">LV5</Option>
                                    <Option value="LV6">LV6</Option>
                                    <Option value="CN1">CN1</Option>
                                </SmallSelect>
                            </FormLineWrap>
                        </OptionContainer>
                        <Label>Số điện thoại</Label>
                        <Input type="tel" id="phone" name="phone" placeholder="0987654321"></Input>
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
