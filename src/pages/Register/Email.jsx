import React, { useState } from 'react';
import { Form, Input, Modal, Button } from 'antd';
import Half from '../../components/Layout/Half';
import styled from 'styled-components';
import {MailOutlined, KeyOutlined} from '@ant-design/icons';

function Email(props) {
    const BREAK_POINT_MEDIUM = 768;

    const EmailBtn = styled(Button)`
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
        width: 100%;
    }
    `
    // Email Modal
    const ModalEmail = styled(Modal)`
    font-family: Noto Sans KR, sans-serif;
    `
    const [modalForm] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEmail, setIsEmail] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        
        modalForm.submit();
        const emailValue = modalForm.getFieldValue('modalEmail');
        const vaildValue = modalForm.getFieldValue('verification');

        if(emailValue !== '' && vaildValue !== ''){
            props.form.setFieldsValue({
                email: emailValue
            })
            setIsEmail(emailValue)
            setIsModalVisible(false);
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <>
          <Form.Item
            name="email"
            label="회사 이메일"
            shouldUpdate={isEmail}
            rules={[
                {
                    required: true,
                    message: '이메일을 입력해주세요',
                  },
            ]}
          >  
            <Half style={{padding: 0}}>
                <Input 
                value={isEmail}
                placeholder="이메일 인증을 통해 이메일을 입력해주세요"
                disabled
                /> &nbsp;
                <EmailBtn 
                type="primary"
                onClick={showModal}
                >
                    이메일 인증
                </EmailBtn>
            </Half>
          </Form.Item>  
          {/* 이메일 인증 모달 */}
          <ModalEmail title="Email verification" 
          visible={isModalVisible} 
          centered
          onOk={handleOk} 
          onCancel={handleCancel}
          >
            <Form
            layout={'vertical'}
            form={modalForm}
            >
                <Form.Item
                    name="modalEmail"
                    label="회사 이메일"
                    rules={[
                    {
                        type: 'email',
                        message: '이메일의 형식이 맞지 않습니다.',
                    },
                    {
                        required: true,
                        message: '이메일을 입력해주세요.',
                    },
                    ]}
                >  
                <Input
                    prefix={<MailOutlined />}
                    placeholder="이메일 주소를 입력해주세요."
                />
                </Form.Item>
                <Form.Item
                name="verification"
                label="인증번호"
                rules={[
                {
                    required: true,
                    message: '인증번호를 입력해주세요.',
                },
                ]}
                >
                <Input
                    prefix={<KeyOutlined />}
                    placeholder="인증번호를 입력해주세요"
                    />  
                </Form.Item>
            </Form>   
          </ModalEmail>
        </>
    )
}

export default Email
