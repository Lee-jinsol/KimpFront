import React from 'react'
import styled from 'styled-components'
import mainImg from '../image/MainImg.png';
import { PhoneFilled, MailFilled } from '@ant-design/icons';
import Half from '../components/Half';
import { bestData } from '../data/best';
import SliderFour from '../components/SliderFour';
import Number from '../components/Number';
import Review from '../components/Review';
import { comment } from '../data/comment';


// const { Step } = Steps;

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

function Home() {

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

    const Phone = styled.section`
        display : flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 60px;
        background: #102A3E;
        color: #fff;
        font-weight: bold;
        font-size: 25px;
        p{
            margin-bottom: 0;
        }
    `
    const PhoneIcon = styled(PhoneFilled)`
        transform: rotateY(180deg); 
    `

    const Needs = styled.section`
        padding: 50px;
        div{
            justify-content: space-evenly;
        }
        p{
            color: #A4A4A4
        }
    `
    const NDA = styled.section`
        background: #102A3E;
        color: #fff;
        width: 100%;
        height: 200px;
        text-align: center;
        padding: 50px 0;
        font-size: 15px;
    `

    const Best = styled.section`
        padding: 50px;
    `

    const Progress =  styled.section`
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

    const Proof =  styled.section`
    padding: 50px;

    `

    const AtAnyTime =  styled.section`
    padding: 50px;
    background: #102A3E;
    text-align: center;
    h1{
        color: #fff;
    }
    `

    const White = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        background: #fff;
        margin: 30px;
        color: #102A3E;
        ul{
            list-style:none;
            margin: 0;
            padding: 0;
            li{
                font-size: 20px;
            }
        }
    `

    return (
        <div>
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
            <Phone>
                <p>M&A Free family business succession consulting</p>
                <p><PhoneIcon/> &nbsp; 02-6000-5351</p>
            </Phone>
            <Needs>
                <h1>각자의 니즈를 KIMP에서 해결하세요</h1>
                <p>KIMP가 현재 상황에 가장 잘 맞는 매도인 그리고 매수인을 찾아드립니다.</p>
                <Half style={{paddingTop: '20px'}}>
                    <img src={mainImg} alt="니즈1" style={{ paddingRight: '30px'}}/>
                    <div style={{ textAlign: 'left' }}>
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
                    <div style={{ textAlign: 'right' }}>
                        <h1>매도를 원하시는 고객</h1>
                        <p>
                        정보공개범위를 스스로 선택해<br/>
                        내가 정보를 주고 싶은 매수인에게만 <br/>
                        정보를 줄 수  있는  안전한 매도 거래를 도와드립니다.
                        </p>
                    </div>
                    <img src={mainImg} alt="니즈2" style={{ paddingLeft: '30px'}}/>
                </Half>
            </Needs>
            <NDA>
                KIMP의 모든 사용자는<br/>
                NDA계약 사전체결, 매수자 정보확인절차를 거칩니다.<br/>
                높은 신뢰성을 유지하기위한 KIMP의 노력으로<br/>
                안전한 M&A 거래를 유도합니다.
            </NDA>
            <Best>
                <h1>지금, KIMP에서 인기있는 공개 매물은.</h1>
                <SliderFour list={bestData}/>
            </Best>
            <Progress>
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
            </Progress>
            <Proof>
                <h1>실제로 KIMP의 회원들이 증명합니다.</h1>
                <Review list={comment}/>
            </Proof>
            <AtAnyTime>
                <h1> 궁금한 점이 있으면 언제든지 연락주세요. </h1>
                <h1> KIMP는 365일 24시간 열려있습니다. </h1>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <White>
                    <ul>
                        <li><PhoneIcon  style={{ fontSize: '50px' }}/></li>
                        <li> 02-6000-5351</li>
                    </ul>
                </White>
                <White>
                    <ul>
                        <li><MailFilled style={{ fontSize: '50px' }} /></li>
                        <li>tradehelp@kita.net</li>
                    </ul>
                </White>
                </div>
            </AtAnyTime>
        </div>
    )
}

export default Home
