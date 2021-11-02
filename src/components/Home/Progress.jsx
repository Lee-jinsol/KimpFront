import React from 'react'
import styled from 'styled-components'
import Half from '../Layout/Half';
import Number from '../Home/Number';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks'

function Progress() {
    const BREAK_POINT_EXTRA_LARGE = 1200;
    const BREAK_POINT_LARGE = 992;
    const BREAK_POINT_SMALL = 576;

    const Reason =  styled.section`
        padding: 30px;
        background: #102A3E;
        position: relative;
        height: 550px;
        h1{
            color: #fff;
        }
        img{
            // width: 100%;
            height: 500px;
        }
        &::before{
            content: "";
            background: url(https://images.pexels.com/photos/934456/pexels-photo-934456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
            background-size: cover;
            opacity: 0.5;
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
        }
        @media only screen and (max-width: ${BREAK_POINT_EXTRA_LARGE}px) {
           img{
            height: 300px;
           } 
        }
        @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
            padding: 20px;
            height: 100%;
            img{
                display: none;
            }
        }
    `
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
    const animatedImage = useScrollClipPath('right', 1, 0.5);
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('smallLeft', 1, 0.1),
        2: useScrollFadeIn('smallLeft', 1, 0.2),
        3: useScrollFadeIn('smallLeft', 1, 0.3),
        4: useScrollFadeIn('smallLeft', 1, 0.4),
        5: useScrollFadeIn('smallLeft', 1, 0.5),
    };

    return (
        <>
            <Reason>
                <h1 {...animatedItem[0]}>
                    KIMP에서 M&A를 진행해야 하는 이유
                </h1>
                <Half>
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
                    <img src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="progress" {...animatedImage}/>
                </Half>
            </Reason>
        </>
    )
}

export default Progress
