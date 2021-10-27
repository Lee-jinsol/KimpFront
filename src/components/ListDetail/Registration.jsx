import React from 'react'
import styled from 'styled-components'

const FourArea = styled.div`
float: right;
padding: 15px;
padding-right: 30px;
`
const HalfArea = styled.div`
text-align: right;
b{
    float: left;
    display: block;
    padding-right: 20px;
    font-size: 14px;
}
`

function Registration() {
    return (
        <div>
            <FourArea>
                <HalfArea>
                    <b>등록일</b> &nbsp;
                    <span>2021.09.30</span>
                </HalfArea>
                <HalfArea>
                    <b>최근 수정일</b> &nbsp;
                    <span>2021.10.04</span>
                </HalfArea>
                <HalfArea>
                    <b>등록자</b> &nbsp;
                    <span>한기영</span>
                </HalfArea>
            </FourArea>
        </div>
    )
}

export default Registration
