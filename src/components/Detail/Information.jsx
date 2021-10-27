import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { FilePdfOutlined, SolutionOutlined, EnvironmentOutlined, DollarOutlined } from '@ant-design/icons';
import Mark from '../Common/Mark';

const Info = styled.div`
display: block;
width: 100%;
b{
    font-size: 17px;
}
p{
    font-size: 12px;
}
`
const Icon = styled.div`
font-size: 20px;
`

function Information(props) {
    const data = props.list;
    return (
        <div>
        <h3><Mark blue>INFORMATION</Mark></h3>
            <div style={{width: '100%', textAlign: 'center'}}>
            <Row gutter={[16, 16]} >
                <Col lg={12} md={12} sm={12} xs={24}>
                    <Info>
                        <b>산업 업종</b>
                        <Icon>
                            <SolutionOutlined />
                        </Icon>
                    <p>{data.category}</p>
                    </Info>
                </Col>
                <Col lg={12} md={12} sm={12} xs={24}>
                <Info>
                    <b>지역</b>
                    <Icon>
                        <EnvironmentOutlined />
                    </Icon>
                    <p>{data.location}</p>
                </Info>
                </Col>
                <Col lg={12} md={12} sm={12} xs={24}>
                    <Info>
                    <b>Deal size</b>
                    <Icon>
                        <DollarOutlined />
                    </Icon>
                    <p>{data.sales}</p>
                    </Info>
                </Col>
                <Col lg={12} md={12} sm={12} xs={24}>
                <Info>
                <b>회사 명세서</b>
                <Icon>
                    <FilePdfOutlined />
                </Icon>
                <p>회사 명세서.pdf</p>
                </Info>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default Information
