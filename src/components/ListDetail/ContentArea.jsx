import React from 'react'
import Center from '../Layout/Center'
import styled from 'styled-components'
import { SolutionOutlined, EnvironmentOutlined, DollarOutlined } from '@ant-design/icons';

const SecondArea = styled.div`
    // background: yellow;
    width: 100%;
    // height: 150px;
`

const Align = styled(Center)`
    padding-top: 20px;
`

const Info = styled.div`
    padding: 10px;
    text-align: center;
    // background: #0092ff;
    width: 200px;
    b{
        font-size: 20px;
    }
`
const Icon = styled.div`
font-size: 30px;
`

function ContentArea() {
    return (
        <div>
        <SecondArea>
            <Align>
                <Info>
                    <b>산업 업종</b>
                    <Icon>
                        <SolutionOutlined />
                    </Icon>
                    <p>소셜네트워킹서비스</p>
                </Info>
                <Info>
                    <b>지역</b>
                    <Icon>
                        <EnvironmentOutlined />
                    </Icon>
                    <p>대한민국 서울시 성북구</p>
                </Info>
                <Info>
                    <b>Deal size</b>
                    <Icon>
                        <DollarOutlined />
                    </Icon>
                    <p>~2,000</p>
                </Info>
            </Align>
            </SecondArea>
        </div>
    )
}

export default ContentArea