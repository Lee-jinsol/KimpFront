import React from 'react'
import styled from 'styled-components'


const HalfArea = styled.div`
text-align: right;
b{
    float: left;
    display: block;
    font-size: 14px;
}
`

function Registration(props) {
    const data = props.list;
    return (
        <div>
            <HalfArea>
                <b>등록일</b> &nbsp;
                <span>{data.updatedat}</span>
            </HalfArea>
            <HalfArea>
                <b>최근 수정일</b> &nbsp;
                <span>{data.lastmodifiedat}</span>
            </HalfArea>
            <HalfArea>
                <b>등록자</b> &nbsp;
                <span>{data.user}</span>
            </HalfArea>
        </div>
    )
}

export default Registration
