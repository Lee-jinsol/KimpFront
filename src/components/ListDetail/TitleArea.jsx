import React from 'react'
import styled from 'styled-components'
import detailImg from '../../image/MainImg.png';
import { Button } from 'antd';
import Half from '../Layout/Half';

const FirstArea = styled.div`
    position: relative;
    width: 100%;
    height: 120px;
`

const LogoImg = styled.div`
    position: absolute;
    top: 10px;
    left: 40px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
`
const Title = styled.div`
    position: absolute;
    top: 15px;
    left: 80px;
    background: #102A3E;
    width: 1400px;
    color: #fff;
    padding-left: 70px;
    padding-right: 20px;
    h1{
        color: #fff;
    }
`

function TitleArea() {
    return (
        <div>
        <FirstArea>
            <LogoImg  style={{backgroundImage: `url(${detailImg})`}}/>
                <Title>
                    <Half style={{padding: '0px'}}>
                        <div>
                            <h1>(주) 다원</h1>
                            <p>최초의 온라인 소개팅 서비스를 도입한 SNS 업체</p>
                        </div>
                        <Button>비공개 정보 열람 신청하기</Button>
                    </Half>
                </Title>
            </FirstArea>
        </div>
    )
}

export default TitleArea
