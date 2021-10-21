import React from 'react'
import Center from '../Layout/Center'
import { LockOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import { Col, Row } from 'antd';

const Icon = styled.div`
font-size: 30px;
`

const ThirdArea = styled.div`
margin: 20px;
padding: 20px;
text-align: center;
background: #102A3E;
color: #fff;
`

const DetailCenter = styled(Center)`

`
const InfoDetail = styled.div`
width: 300px;
text-align: center;
vertical-align: center;
b{
font-size: 15px;
}
p{
font-size: 12px;
}
`

function OpenArea() {
    return (
        <div>
            <ThirdArea>
            <DetailCenter>
            <Row gutter={[16, 16]}>
                <Col lg={6} md={8} xs={24}>
                <InfoDetail>
                    <b>Revenue (매출액), (억원)</b>
                    <Icon>
                        <LockOutlined />
                    </Icon>
                    <p>비공개</p>
                </InfoDetail>
                </Col>
                <Col lg={6} md={8} xs={24}>
                <InfoDetail>
                    <b>OP (영업이익),(억원)</b>
                    <Icon>
                        <LockOutlined />
                    </Icon>
                    <p>비공개</p>
                </InfoDetail>
                </Col>
                <Col lg={6} md={8} xs={24}>
                <InfoDetail>
                    <b>주요 대상 고객</b>
                    <Icon>
                        <LockOutlined />
                    </Icon>
                    <p>비공개</p>
                </InfoDetail>
                </Col>
                <Col lg={6} md={8} xs={24}>
                <InfoDetail>
                    <b>주요 인/허가</b>
                    <Icon>
                        <LockOutlined />
                    </Icon>
                    <p>비공개</p>
                </InfoDetail>
                </Col>
                
                <Col lg={6} md={8} xs={24}>
                <InfoDetail>
                    <b>정직원 수(명)</b>
                    <Icon>
                        <LockOutlined />
                    </Icon>
                    <p>비공개</p>
                </InfoDetail>
                </Col>
                <Col lg={6} md={8} xs={24}>
                <InfoDetail>
                    <b>아르바이트 직원수</b>
                    <Icon>
                        <LockOutlined />
                    </Icon>
                    <p>비공개</p>
                </InfoDetail>
                </Col>
                <Col lg={6} md={8} xs={24}>
                <InfoDetail>
                    <b>시가순자산(억원)</b>
                    <Icon>
                        <LockOutlined />
                    </Icon>
                    <p>비공개</p>
                </InfoDetail>
                </Col>
                <Col lg={6} md={8} xs={24}>
                <InfoDetail>
                    <b>인수조건</b>
                    <Icon>
                        <LockOutlined />
                    </Icon>
                    <p>비공개</p>
                </InfoDetail>
                </Col>
                
            </Row>
            </DetailCenter>
            </ThirdArea>
        </div>
    )
}

export default OpenArea
