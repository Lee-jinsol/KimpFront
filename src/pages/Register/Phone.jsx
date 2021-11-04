import React from 'react'
import { Form, Input, Select } from 'antd';

function Phone() {

    const { Option } = Select;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 100,
            }}
          >
            <Option value="1">+1</Option>
            <Option value="1671">+1671</Option>
            <Option value="20">+20</Option>
            <Option value="33">+33</Option>
            <Option value="82">+82</Option>
          </Select>
        </Form.Item>
      );
      
    return (
        <>
          <Form.Item
            name="telephone"
            label="휴대전화"
            rules={[
              {
                required: true,
                message: '휴대전화를 입력해주세요.',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="전화번호"
            rules={[
              {
                required: true,
                message: '전화번호를 입력해주세요.',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
        
        </>
    )
}

export default Phone
