import React from 'react'
import { PhoneFilled, MailFilled } from '@ant-design/icons';
import styled from 'styled-components'
import { useScrollFadeIn } from '../../hooks'
import contactSvg from '../../assets/contact.svg';

function Contact() {

    const BREAK_POINT_SMALL = 576;

    const AtAnyTime =  styled.section`
    padding: 50px;
    // background: #102A3E;

    background: url(${contactSvg});
    background-size: cover;

    text-align: center;
    h1{ 
        color: #fff;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
        padding: 40px;
        h1{
            font-size: 20px;
        }
    }
    `

    const Center = styled.div`
        display: flex;
        justify-content: center;
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
        display:inline-block;
        text-align: center;
    }
    `

    const Area = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        margin: 30px;
        background: #000;
        color: #fff;
        &::before{
            content: "";
            background: ${(props) => (props.phone ? "url(https://images.pexels.com/photos/583847/pexels-photo-583847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)" : "url(https://images.pexels.com/photos/3850252/pexels-photo-3850252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)")}; 
            background-size: cover;
            opacity: 0.5;
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
        }
        &:hover{
            background: #fff;
            color: #000;
        }
        ul{
            list-style:none;
            margin: 0;
            padding: 0;
            li{
                font-size: 15px;
                opacity: 1;
            }
        }
        @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
            width: 200px;
            height: 150px;
            margin: 0px;
            margin-top: 30px;
        }
    `

    const TelIcon = styled(PhoneFilled)`
        transform: rotateY(180deg); 
        font-size: 50px
    `
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0.2),
        2: useScrollFadeIn('up', 1, 0.3),
        3: useScrollFadeIn('up', 1, 0.4),
    }

    return (
        <>
            <AtAnyTime>
                <h1 {...animatedItem[0]}> 
                    궁금한 점이 있으면 언제든지 연락주세요. 
                </h1>
                <h1 {...animatedItem[1]}> 
                    KIMP는 365일 24시간 열려있습니다. 
                </h1>
                <Center>
                <Area phone {...animatedItem[2]}>
                    <ul>
                        <li><TelIcon  /></li>
                        <li> 02-6000-5351</li>
                    </ul>
                </Area>
                <a href="mailto:tradehelp@kita.net">
                    <Area {...animatedItem[3]}>
                        <ul>
                            <li><MailFilled style={{ fontSize: '50px' }} /></li>
                            <li>tradehelp@kita.net</li>
                        </ul>
                    </Area>
                </a>
                </Center>
            </AtAnyTime>   
        </>
    )
}

export default Contact
