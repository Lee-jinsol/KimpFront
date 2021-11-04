import React from 'react'
import Number from '../Home/Number';
import styled from 'styled-components'
import { useScrollFadeIn } from '../../hooks'

function Circle() {
    const BREAK_POINT_LARGE = 992;

    const Division = styled.div`
        display: flex;
        h2{
            color: #fff;
        }
        p{
            color: #C9C9C9;
        }
    `

    const Block = styled.div`
        width: 100%;
        display: block;
        padding: 20px;
        @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
            padding: 0;
        }
    `


    const Line = styled.div`
        border-left: 1px solid #fff;
        height: 40px;
        margin: 20px;
        @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
            display: none;
        }
    `
    const animatedItem = {
        1: useScrollFadeIn('smallLeft', 1, 0.1),
        2: useScrollFadeIn('smallLeft', 1, 0.2),
        3: useScrollFadeIn('smallLeft', 1, 0.3),
        4: useScrollFadeIn('smallLeft', 1, 0.4),
        5: useScrollFadeIn('smallLeft', 1, 0.5),
    };

    return (
        <div>
           <Block>
                <Division {...animatedItem[1]}>
                <Number white>1</Number>
                <div style={{paddingLeft: '30px'}}>
                    <h2>안전한 정보공유</h2>
                    <p>한국무역협회에서 분사한 M&A플랫폼</p>
                </div>
                </Division>
                <Line {...animatedItem[2]}/>
                <Division {...animatedItem[3]}>
                <Number white>2</Number>
                <div style={{paddingLeft: '30px'}}>
                    <h2>다양한 매물</h2>
                    <p>M&A 생태계 다양한 관계자들을 포용</p>
                </div>
                </Division>
                <Line {...animatedItem[4]}/>
                <Division {...animatedItem[5]}>
                <Number white>3</Number>
                <div style={{paddingLeft: '30px'}}>
                    <h2>딱맞는 연결</h2>
                    <p>최적의 전문가 및 네트워킹을 통한 선택</p>
                </div>
                </Division>
            </Block> 
        </div>
    )
}

export default Circle
