import React from 'react'
import { Card } from 'antd';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

function CardContent({content, index}) {
    const BREAK_POINT_MEDIUM = 768;
    // const BREAK_POINT_SMALL = 576;

    const CardSize = styled(Card)`
        width: 100%;
        height: 450px;
        overflow: hidden;
        background-size: cover; 
         @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
             height: 420px;
         }
         @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
             height: 380px;
         }
        // `
        // const [count, setCount] = useState(content.count);

        // const counter = () => {
        //    setCount(prevCount => prevCount + 1);
        // }
    return (
        <div>
            <NavLink to={content.sellBuySide === 'sell' ? `/list/${content.name}`  : `/buy/${content.name}`}>
                <CardSize
                key={index}
                hoverable
                cover={<img alt={index} src={content.image} style={{height: '25vh'}}/>}>
                <h1>{content.name}</h1>
                <p>위치: {content.location}</p>
                <p>매출: {content.sales}</p>
                <p>{content.details}</p>
                </CardSize>
            </NavLink>
        </div>
    )
}

export default CardContent
