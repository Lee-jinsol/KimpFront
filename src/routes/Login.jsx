import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import styled from 'styled-components';

function Login() {
  const BREAK_POINT_MEDIUM = 768;
  const BREAK_POINT_SMALL = 576;

  const Section = styled.section`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
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

  const LoginButton = styled(Button)`
    width: 500px;
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      width: 400px;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
      width: 300px;
    }
  `;

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
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
          >
            Log in
          </LoginButton>

          <br></br>
          <br></br>
          <a href="Register">잠깐! 아직 회원가입을 하지 않으셨나요?</a>
        </Form.Item>
      </Form>
    </Section>
  );
}
export default Login;
