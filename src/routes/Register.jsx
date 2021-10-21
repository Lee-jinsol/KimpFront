import React from 'react';
import {Form, Input, Checkbox, Button} from 'antd';
import styled from 'styled-components';

function Register() {
  const BREAK_POINT_LARGE = 992;
  const BREAK_POINT_MEDIUM = 768;
  const BREAK_POINT_SMALL = 576;

  const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    text-align: center;

    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 50px;
      text-align: center;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 50px;
      text-align: center;
    }
  `;

  const Inputform = styled.section`
    width: 500px;
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      width: 400px;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
      width: 300px;
    }
  `;

  const RegisButton = styled(Button)`
    width: 500px;
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      width: 400px;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
      width: 300px;
    }
  `;

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Section>
      <Form
        layout={'vertical'}
        form={form}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Inputform>
          <Form.Item
            name="email"
            label="E-mail"
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
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력해주세요.',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '비밀번호를 다시 한번 입력해주세요.',
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error('입력하신 비밀번호가 일치하지 않습니다.')
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: '이름을 입력해주세요.',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: '전화번호를 입력해주세요.',
              },
            ]}
          >
            <Input
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
        </Inputform>

        <Form.Item
          name="agreement1"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('서비스 이용약관 동의 해주세요.')),
            },
          ]}
        >
          <Checkbox>
            서비스 이용약관 동의 (필수) <a href=""></a>
          </Checkbox>
        </Form.Item>

        <Form.Item
          name="agreement2"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error('개인정보 수집 이용 동의 해주세요.')
                    ),
            },
          ]}
        >
          <Checkbox>
            개인정보 수집 이용 동의 (필수) <a href=""></a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Checkbox>
            광고성 정보 수신 및 마케팅 활용 동의 (선택) <a href=""></a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <RegisButton type="primary" htmlType="submit" href="/Login">
            Register
          </RegisButton>
        </Form.Item>
      </Form>
    </Section>
  );
}

export default Register;
