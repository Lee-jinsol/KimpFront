import React from 'react'
import Mark from '../Common/Mark';

function TitleArea(props) {
    const data = props.list;
    return (
        <div>
            <h1>
            {data.sellBuySide === 'buy' ? <Mark sell>[{data.sellBuySide}]</Mark>  : <Mark buy>[{data.sellBuySide}]</Mark> }
            &nbsp;
            {data.name} 
            </h1>
            <h2 style={{color: '#6C6C6C'}}>{data.details}</h2>
        </div>
    )
}

export default TitleArea
