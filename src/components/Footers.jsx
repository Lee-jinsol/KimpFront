import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import Ul from './Ul';

function Footers() {

    const Bottom = styled.footer`
        display : flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 20px;
        border-top: 1px solid #373737;
        box-shadow: 4px #373737;
    `
    
    const Block = styled.div`
    width: 100%;
    display: block;
    padding: 50px;
    text-align: center;
    `

    const Division = styled.div`
    display: flex;
    text-align : left;
    color: #A4A4A4;
    h3{
        color: #000;
        margin-right: 10px;
    }
    `

    return (
        <div>
        <Bottom>
            <Block>
                <Logo /><br/>
                Korea International M&A Platfom<br/>
                Copyright © 2021 KIMP
            </Block>
            <Block>
                <Division>
                    <h3>Represent</h3> 
                    <Ul>
                        <li>Kiyoung Han (한기영)</li>
                    </Ul>
                </Division>
                <Division>
                    <h3>Contact</h3>
                    <Ul>
                        <li>02-6000-5351</li>
                        <li>010-7126-8910</li>
                        <li>tradehelp@kita.net</li>
                    </Ul>
                </Division>
                <Division>
                    <h3>Location</h3>
                    <Ul>
                        <li>513 COEX 2 Startup Youngchi, Gangnam-gu, Seoul</li>
                        <li>서울시 강남구 영동대로 513 코엑스 2층 스타트업 브랜치</li>
                    </Ul>
                </Division>
            </Block>
            <Block>
                <h3>Policy</h3>
            </Block>
        </Bottom>
        </div>
    )
}

export default Footers
