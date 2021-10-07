import React from 'react'
import styled from 'styled-components'
import mainImg from '../image/MainImg.png';
import Half from '../Layout/Half';
import Number from '../Home/Number';

function Progress() {
    const Reason =  styled.section`
        padding: 50px;
        background: #102A3E;
        h1{
            color: #fff;
        }
    `
        const Division = styled.div`
        display: flex;
        h2{
            color: #fff;
        }
        p{
            color: #A4A4A4;
        }
    `

    const Block = styled.div`
        width: 100%;
        display: block;
        padding: 50px;
    `

    const Line = styled.div`
        border-left: 1px solid white; 
        height: 40px;
        margin: 20px;
    `

    return (
        <>
            <Reason>
                <h1>KIMP에서 M&A를 진행해야 하는 이유</h1>
                <Half>
                    <Block>
                        
                        <Division>
                        <Number white>1</Number>
                        <div style={{paddingLeft: '30px'}}>
                            <h2>안전한 정보공유</h2>
                            <p>한국무역협회에서 분사한 M&A플랫폼</p>
                        </div>
                        </Division>
                        <Line />
                        <Division>
                        <Number white>2</Number>
                        <div style={{paddingLeft: '30px'}}>
                            <h2>다양한 매물</h2>
                            <p>M&A 생태계 다양한 관계자들을 포용</p>
                        </div>
                        </Division>
                        <Line />
                        <Division>
                        <Number white>3</Number>
                        <div style={{paddingLeft: '30px'}}>
                            <h2>딱맞는 연결</h2>
                            <p>최적의 전문가 및 네트워킹을 통한 선택</p>
                        </div>
                        </Division>
                    </Block>
                    <img src={mainImg} alt="progress"/>
                </Half>
            </Reason>
        </>
    )
}

export default Progress
