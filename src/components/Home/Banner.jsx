import React from 'react'
import styled from 'styled-components'
import mainImg from '../../image/MainImg.png';

const BulidingImg = {
    backgroundImage: `url(${mainImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '600px'
}

const d1 = {
    left: '51px',
    top: '100px',
    fontSize: '30px',
    lineHeight: '40px'
}

const d2 = {
    left: '51px',
    top: '350px',
    fontSize: '20px',
    lineHeight: '30px' ,
    fontWeight: 'normal' 
}

const d3 = {
    top: '450px',
    right: '50px',
    fontSize: '15px',
    lineHeight: '30px',
    textAlign: 'right'
}

function Banner() {
    const Section = styled.section`
        position: relative;
        div{
            color: #fff;
            position: absolute;
            font-weight: bold;
            h1{
                color: #fff;
            }
        }
    `
    return (
        <>
            <Section style={BulidingImg}>
                <div style={d1}>
                    Safe Process of M&A, <br/>
                    We will DO BEST <br/>
                    for your BUSINESS.
                </div>
                <div style={d2}>
                    <b>K</b>orea <br/>
                    <b>I</b>nternational <br/>
                    <b>M</b>&A  <br/>
                    <b>P</b>latform  <br/><br/>
                    <h1>KIMP</h1>
                </div>
                <div style={d3}>
                M&A 중개 및 사업승계 컨설팅 서비스를 제공하는 KIMP.<br/>
                어렵기만한 M&A, KIMP가 해결해 드립니다. <br/>
                한국무역협회 산하의 KIMP에서 안전한 M&A 바로 시작하세요.
                </div>
            </Section>
        </>
    )
}

export default Banner
