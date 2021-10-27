import React from 'react'
import styled from 'styled-components'

function ImgArea(props) {
    const Img = styled.div`
    display: block;
    width: 100%;
    height: 400px;

    background: url(${props.list.image});
    background-size: cover;
    `

    return (
        <div>
            <Img/>
        </div>
    )
}

export default ImgArea
