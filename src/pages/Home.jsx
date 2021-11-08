import React from 'react'
import styled from 'styled-components'
import { bestData } from '../data/best';
import SliderFour from '../components/Home/BestContent';
import Review from '../components/Home/Review';
import { comment } from '../data/comment';

import Banner from '../components/Home/Banner';
import Phone from '../components/Home/Phone';
import Contact from '../components/Home/Contact';
import UserInfo from '../components/Home/UserInfo';
import Progress from '../components/Home/Progress';
import ndaSvg from '../assets/nda.svg';

import { useScrollFadeIn } from '../hooks'

function Home() {

    const BREAK_POINT_SMALL = 576;

    const NDA = styled.section`
        background: url(${ndaSvg});
        background-size: cover;

        color: #fff;
        width: 100%;
        height: 200px;
        text-align: center;
        padding: 50px 0;
        font-size: 15px;
        @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
            height: 170px;
            font-size: 13px;
        }
    `

    const SectionStyle = styled.section`
        padding: 50px;
        h1{
            font-size: 25px;
        }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
        padding: 20px;
        h1{
            font-size: 20px;
        }
    }
    `
    const animatedItem = useScrollFadeIn('down', 1, 0.2)

    return (
        <>
            <Banner />
            <Phone />
            <UserInfo />
            <NDA>
                <div {...animatedItem}>
                    KIMP의 모든 사용자는<br/>
                    NDA계약 사전체결, 매수자 정보확인절차를 거칩니다.<br/>
                    높은 신뢰성을 유지하기위한 KIMP의 노력으로<br/>
                    안전한 M&A 거래를 유도합니다.
                </div>
            </NDA>
            <SectionStyle>
                <h1>지금, KIMP에서 인기있는 공개 매물은.</h1>
                <SliderFour list={bestData} />
            </SectionStyle>
            <Progress/>
            <SectionStyle>
            <h1>실제로 KIMP의 회원들이 증명합니다.</h1>
                <Review list={comment}/>
            </SectionStyle>
            <Contact/>
        </>
    )
}

export default Home
