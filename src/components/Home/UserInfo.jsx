import React from 'react'
import styled from 'styled-components'
// import mainImg from '../../image/MainImg.png';
import Half from '../Layout/Half';
import Buying from '../../image/Buying.gif'
import Selling from '../../image/Selling.gif'

function UserInfo() {

    const BREAK_POINT_MEDIUM = 768;

    const Needs = styled.section`
        padding: 50px;
        h1{
            font-size: 25px;
        }
        div{
            justify-content: space-evenly;
            img{
                width: 100%;
            }
            div{
                width: 100%;
                text-align: center;
            }
        }
        p{
            color: #A4A4A4;
            font-size: 14px;
        }
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            padding: 20px;
            p{
                font-size: 12px;
            }
            div{
                h1{
                    font-size: 20px;
                }
            }
        }
    `

    return (
        <>
            <Needs>
                <h1>각자의 니즈를 KIMP에서 해결하세요</h1>
                <p>KIMP가 현재 상황에 가장 잘 맞는 매도인 그리고 매수인을 찾아드립니다.</p>
                <Half style={{paddingTop: '20px', borderBottom: '1px solid #e7e7e77e'}}>
                    <img src={Buying} alt="니즈1"/>
                    <div>
                        <h1>매수를 원하시는 고객</h1>
                        <p>
                            KIMP가 갖고있는 다양한 매물들 중에<br/>
                            산업 분야, 매출, 회사 규모 등 <br/>
                            내가 원하는 조건들만 골라서<br/>
                            한 눈에 보고 빠르게 거래가 성사될 수 있도록 도와드립니다.
                        </p>
                    </div>
                </Half>
                <Half>
                    <div >
                        <h1>매도를 원하시는 고객</h1>
                        <p>
                        정보공개범위를 스스로 선택해<br/>
                        내가 정보를 주고 싶은 매수인에게만 <br/>
                        정보를 줄 수  있는  안전한 매도 거래를 도와드립니다.
                        </p>
                    </div>
                    <img src={Selling} alt="니즈2"/>
                </Half>
            </Needs>
        </>
    )
}

export default UserInfo
