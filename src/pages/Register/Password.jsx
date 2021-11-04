import React from 'react'
import { Form, Input } from 'antd';

function Password() {
    return (
        <>
          <Form.Item
            name="password"
            label="비밀번호"
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
            label="비밀번호 확인"
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
        </>
    )
}

export default Password
