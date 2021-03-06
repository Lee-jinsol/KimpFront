import React from 'react'
import styled from 'styled-components'
// import mainImg from '../../image/MainImg.png';
import Half from '../Layout/Half';
import Buying from '../../image/Buying.gif'
import Selling from '../../image/Selling.gif'
import { useScrollClipPath, useScrollFadeIn } from '../../hooks'

function UserInfo() {

    const BREAK_POINT_MEDIUM = 768;
    const BREAK_POINT_SMALL = 576;

    const Needs = styled.section`
        padding: 50px;
        background: #EBEBEB;
        h1{
            font-size: 25px;
        }
        img{
            width: 500px;
        }
        div{
            width: 100%;
        }
        p{
            color: #A4A4A4;
            font-size: 14px;
        }
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            padding: 20px;
            img{
                width: 100%;
            }
            p{
                font-size: 12px;
            }
            div{
                text-align: center;
            }
        }
        @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
            h1{
                font-size: 5vw;
            }
        }
    `
    const HalfOne = styled(Half)`
        padding-top: 20px;
    `
    const BoxOne = styled.div`
        padding: 50px;
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            padding: 0;
        }
    `
    const HalfTwo = styled(Half)`
    `
    const BoxTwo = styled.div`
        text-align: right;
        padding-right: 5%;
        bottom: 0;

        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            padding-right: 0%;
            text-align: center;
        }
    `
    
    const animatedItem = {
        0: useScrollFadeIn('bottom', 1, 0),
        1: useScrollFadeIn('bottom', 1, 0.2),
    };

    const animatedImage = {
        0: useScrollClipPath('left', 1, 0.2),
        1: useScrollClipPath('right', 1, 0.3),
    }

    return (
        <>
            <Needs>
            <h1>각자의 니즈를 KIMP에서 해결하세요</h1>
                <p>KIMP가 현재 상황에 가장 잘 맞는 매도인 그리고 매수인을 찾아드립니다.</p>
                <HalfOne>
                    <img src={Buying} alt="니즈1"  {...animatedImage[0]}/>
                    <BoxOne {...animatedItem[0]}>
                        <h1>매수를 원하시는 고객</h1>
                        <p>
                            KIMP가 갖고있는 다양한 매물들 중에<br/>
                            산업 분야, 매출, 회사 규모 등 <br/>
                            내가 원하는 조건들만 골라서<br/>
                            한 눈에 보고 빠르게 거래가 성사될 수 있도록 도와드립니다.
                        </p>
                    </BoxOne>
                </HalfOne>
                <HalfTwo>
                    <BoxTwo {...animatedItem[1]}>
                        <h1>매도를 원하시는 고객</h1>
                        <p>
                        정보공개범위를 스스로 선택해<br/>
                        내가 정보를 주고 싶은 매수인에게만 <br/>
                        정보를 줄 수  있는  안전한 매도 거래를 도와드립니다.
                        </p>
                    </BoxTwo>
                    <img src={Selling} alt="니즈2" {...animatedImage[1]}/>
                </HalfTwo>
            </Needs>
        </>
    )
}

export default UserInfo
