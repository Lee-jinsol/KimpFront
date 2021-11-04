import React from 'react'
import { Form, Button } from 'antd';
import styled from 'styled-components';

import Email from './Email';
import Password from './Password';
import Info from './Info';
import Phone from './Phone';
import Website from './Website';
import CheckArea from './CheckArea';
import registerSvg from '../../assets/register.svg';

function Register(props) {
  const BREAK_POINT_MEDIUM = 768;

  const [form] = Form.useForm();

  const Section = styled.section` 
    text-align: center;
    padding: 50px;

    background: url(${registerSvg});
    background-size: cover;

    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      padding: 30px;
    }
  `
  const Center = styled.div`
    display: inline-block;
    width: 600px;

    padding: 50px;
    background: #fff;

    border: 1px solid #e4e4e4;
    border-radius: 30px;
    box-shadow: 1px 1px 1px 1px #e4e4e4;

    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      width: 100%;
      padding: 20px;
    }
  `;

  const RegisterBtn = styled(Button)`
    width: 100%;
  `

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.history.push('/login');
  };

  return (
    <div>
      
      {/* <div class="custom-shape-divider-top-1635951228">
      
      </div> */}
      <Section>
      
      <Form
        layout={'vertical'}
        // {...formItemLayout}
        form={form}
        onFinish={onFinish}
        initialValues={{prefix: '82'}}
        scrollToFirstError
      >
      <Center>
          <Email form={form}/>
          <Password />
          <Info />
          <Phone />
          <Website/>
          <CheckArea/>

          <Form.Item>
            <RegisterBtn 
              type="primary" 
              htmlType="submit">
              Register
            </RegisterBtn>
          </Form.Item>
        </Center>
      </Form>
    </Section>
    </div>
  );
}

export default Register;
