import React from 'react'
import { ServiceInfo, PersonInfo, AdInfo }  from '../../components/Agreement/Info';
import {Form, Checkbox } from 'antd';
function CheckArea() {
    return (
        <div style={{textAlign: 'left'}}>
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
          <Checkbox onClick={ServiceInfo}>
            서비스 이용약관 동의 (필수) 
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
          <Checkbox onClick={PersonInfo}>
            개인정보 수집 이용 동의 (필수) 
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Checkbox onClick={AdInfo}>
            광고성 정보 수신 및 마케팅 활용 동의 (선택)
          </Checkbox>
        </Form.Item>
       </div>
    )
}

export default CheckArea
