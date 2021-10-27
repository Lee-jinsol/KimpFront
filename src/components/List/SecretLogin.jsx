import React from 'react'
import styled from 'styled-components'
import Btn from '../../components/Common/Btn';
import { Result } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import Block from '../../components/Layout/Block';
import { NavLink } from "react-router-dom";

function SecretLogin() {
    const Inner = styled.div`
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    text-align: center;
    `

    const LoginBtn = styled(Btn)`
        width: 300px;
    `

    return (
        <>
        <Inner>
            <Block center>
                <Result
                    icon={<LockOutlined />}
                    title={`로그인 후 이용가능합니다!`}
                />
                
                <LoginBtn><NavLink to="/logIn">로그인 하러가기</NavLink></LoginBtn>
            </Block>
        </Inner>
        </>
    )
}

export default SecretLogin
