import React from 'react'
import { Card } from 'antd';
import styled from 'styled-components';

function CardContent({content, index}) {

    const CardSize = styled(Card)`
        width: 100%;
        height: 480px;
        overflow: hidden;
        `
    return (
        <div>
            <CardSize
            key={index}
            hoverable
            cover={<img alt={index} src={content.image}/>}
        >
            <h1>{content.name}</h1>
            <p>위치: {content.location}</p>
            <p>매출: {content.sales}</p>
            <p>{content.details}</p>
            </CardSize>
        </div>
    )
}

export default CardContent
