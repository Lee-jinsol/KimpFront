import React, { useState }  from 'react'
import {Form, Input, Checkbox, Button, Select, AutoComplete} from 'antd';
import styled from 'styled-components';
import Half from '../components/Layout/Half';
import { ServiceInfo, PersonInfo, AdInfo }  from '../components/Agreement/Info';

const { Option } = Select;

function Register(props) {
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

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.history.push('/login');
  };

  return (
    <Section>
      <Form
        layout={'vertical'}
        form={form}
        onFinish={onFinish}
        initialValues={{
          prefix: '82',
        }}
        scrollToFirstError
      >
        <Inputform>
          <Form.Item
            name="email"
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
            <Half style={{padding: 0}}>
              <Input /> &nbsp;
              <Button type="primary">이메일 인증</Button>
            </Half>
          </Form.Item>

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
            name="website"
            label="홈페이지 주소"
            rules={[
              {
                required: true,
                message: '홈페이지 주소를 입력해주세요!',
              },
            ]}
          >
            <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
              <Input />
            </AutoComplete>
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
        </Inputform>

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

        <Form.Item>
          <RegisButton type="primary" htmlType="submit">
            Register
          </RegisButton>
        </Form.Item>
       </div>
      </Form>
    </Section>
  );
}

export default Register;
