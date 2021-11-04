import React from 'react'
import { Form, Input } from 'antd';

function Info() {
    return (
        <>
          <Form.Item
            name="companyName"
            label="회사명"
            rules={[
              {
                required: true,
                message: '회사명을 입력해주세요.',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="position"
            label="직위"
            rules={[
              {
                required: true,
                message: '직위를 입력해주세요.',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="name"
            label="이름"
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
        </>
    )
}

export default Info
