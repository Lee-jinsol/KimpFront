import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import { ServiceInfo, PersonInfo, AdInfo }  from '../Agreement/Info';

function Footers() {

    const BREAK_POINT_MEDIUM = 768;
    const BREAK_POINT_SMALL = 576;

    const Bottom = styled.footer`
        display : flex;
        justify-content: space-between;
        align-items: center;
        height: 120px;
        font-size: 10px;
        border-top: 1px solid #373737;
        box-shadow: 4px #373737;
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            height: 120px;
        }
        @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
            display: block;
        }
    `
    
    const Block = styled.div`
        width: 100%;
        display: block;
        b{
            font-size: 13px;          
        }
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            font-size: 10px;
            b{
                font-size: 12px;          
            }
        }
    `
    const Thired = styled.div`
        padding-top: 10px;
        @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
            padding: 10px;
        }
    `

    const Ul = styled.ul`
        list-style:none;
        margin: 0;
        padding: 0;
        li{
            color: #A4A4A4;
            text-align : left;
            font-size: 10px;
            cursor:pointer;
            span{
                &:hover{
                    color: #fff;
                    background: #102A3E;
                    transition: 0.2s all;
                }
            }
        }
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            li{
                font-size: 10px;
            }
        }
    `

    return (
        <div>
        <Bottom>
            <Block style={{textAlign: 'center'}}>
                <Logo /><br/>
                Korea International M&A Platfom<br/>
                Copyright © { new Date().getFullYear() } KIMP
            </Block>
            <Block>
                <Thired>
                    <b>Represent</b> 
                    <Ul>
                        <li>Kiyoung Han (한기영)</li>
                    </Ul>
                </Thired>
                <Thired>
                    <b>Location</b>
                    <Ul>
                        <li>513 COEX 2 Startup Youngchi, Gangnam-gu, Seoul</li>
                        <li>서울시 강남구 영동대로 513 코엑스 2층 스타트업 브랜치</li>
                    </Ul>
                </Thired>
            </Block>
            <Block>
                <Thired>
                    <b>Contact</b>
                    <Ul>
                        <li>02-6000-5351 | 010-7126-8910</li>
                        <li>tradehelp@kita.net</li>
                    </Ul>
                </Thired>
                <Thired>
                <b>Policy</b>
                <Ul>
                    <li>
                        <span onClick={ServiceInfo}>서비스 이용약관 동의</span>  
                        &nbsp;|&nbsp; 
                        <span onClick={PersonInfo}>개인정보 수집 이용 동의</span>  
                        &nbsp;|&nbsp;
                        <span onClick={AdInfo}>광고성 정보 수신 및 마케팅 활용 동의</span>
                    </li>
                </Ul>
                </Thired>
            </Block>
        </Bottom>
        </div>
    )
}

export default Footers
