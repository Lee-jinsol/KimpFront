import React from 'react'
import { MailFilled } from '@ant-design/icons';
import styled from 'styled-components'
import PhoneIcon from './PhoneIcon';

function Contact() {

    const AtAnyTime =  styled.section`
    padding: 50px;
    background: #102A3E;
    text-align: center;
    h1{
        color: #fff;
    }
    `

    const White = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        background: #fff;
        margin: 30px;
        color: #102A3E;
        ul{
            list-style:none;
            margin: 0;
            padding: 0;
            li{
                font-size: 20px;
            }
        }
    `

    return (
        <>
            <AtAnyTime>
                <h1> 궁금한 점이 있으면 언제든지 연락주세요. </h1>
                <h1> KIMP는 365일 24시간 열려있습니다. </h1>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <White>
                    <ul>
                        <li><PhoneIcon  style={{ fontSize: '50px' }}/></li>
                        <li> 02-6000-5351</li>
                    </ul>
                </White>
                <White>
                    <ul>
                        <li><MailFilled style={{ fontSize: '50px' }} /></li>
                        <li>tradehelp@kita.net</li>
                    </ul>
                </White>
                </div>
            </AtAnyTime>   
        </>
    )
}

export default Contact
