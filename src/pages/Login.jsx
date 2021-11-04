import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import Center from '../components/Layout/Center'
import Half from '../components/Layout/Half'
import { NavLink } from "react-router-dom";
import loginSvg from '../assets/login.svg';

function Login() {
  const BREAK_POINT_LARGE = 992;
  const BREAK_POINT_MEDIUM = 768;
  const BREAK_POINT_SMALL = 576;

  const LoginArea = styled(Center)`
    padding: 100px;
    min-height: 100vh;
    background: url(${loginSvg});
    background-size: cover;

    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      padding: 100px;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
      padding: 120px;
    }
    
  `
  const Line = styled(Half)`
  background: #fff;
    border: 1px solid #e4e4e4;
    border-radius: 30px;
    box-shadow: 1px 1px 1px 1px #e4e4e4;
    
    img{
      height: 500px;
    }
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      img{
        display: none;
      }
    }

  `

  const Section = styled.section`
    display: block;
    padding: 30px;
    text-align: center;
    span{
      cursor: pointer;
      &:hover{
        border-bottom: 1px solid #102A3E;
        transition: all 2s;
      }
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
        padding: 0;
        span{
          font-size: 12px;
        }
    }
  `;

  const Inputform = styled.section`
    width: 500px;
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      width: 400px;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
      width: 200px;
    }
  `;

  const LoginButton = styled(Button)`
    width: 500px;
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      width: 400px;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
      width: 200px;
    }
  `;

  const Find = styled.div`
  cursor: pointer;
    span{
      font-size: 12px;
      color: #A4A4A4;
      &:hover{
        background: #102A3E;
        color: #fff;
      }
    }
  `

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <LoginArea>
      <Line>
      {/* <img src="https://images.unsplash.com/photo-1519332978332-21b7d621d05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />    */}
      <Section>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Inputform>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: '이메일을 입력해주세요.',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력해주세요.',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </Inputform>

        <Form.Item>
          <LoginButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
            href="/"
          >
            Log in
          </LoginButton>
        </Form.Item>
      </Form>
      <div>
        <span> <NavLink to="/register">잠깐! 아직 회원가입을 하지 않으셨나요?</NavLink></span>
        <Find>
        <span>아이디 찾기</span>  
        <span>&nbsp;|&nbsp;</span> 
        <span>비밀번호 찾기</span>
        </Find>
      </div>
      </Section>
      </Line>
    </LoginArea>
  );
}
export default Login;
