import React from 'react'
import Mark from '../Common/Mark';
import { LockOutlined } from '@ant-design/icons';
import styled from 'styled-components'

function Details(props) {
    const d = props.list;
    const LockIcon = styled(LockOutlined)`
        color: #000;
    `
    return (
        <div>
            <h3><Mark blue>DETAILS</Mark></h3>
            <div style={{display: 'flex'}}>
                <div style={{width: '100%', color: '#4D4D4D'}}>
                    <p>Revenue (매출액), (억원)</p>
                    <p>OP (영업이익),(억원)</p>
                    <p>시가순자산(억원)</p>
                    <p>인수조건</p>
                    <p>주요 대상 고객</p>
                    <p>주요 인/허가</p>
                    <p>정직원 수(명)</p>
                    <p>아르바이트 직원수</p>
                </div>
                <div style={{width: '100%', textAlign: 'right'}}>
                    <p>{d.revenue === '비공개' ? <LockIcon/> : d.revenue}</p>
                    <p>{d.op === '비공개' ? <LockIcon/> : d.op}</p>
                    <p>{d.havingmoney === '비공개' ? <LockIcon/> : d.havingmoney}</p>
                    <p>{d.condifiton === '비공개' ? <LockIcon/> : d.condifiton}</p>
                    <p>{d.maincustomer === '비공개' ? <LockIcon/> : d.maincustomer}</p>
                    <p>{d.mainPermission === '비공개' ? <LockIcon/> : d.mainPermission}</p>
                    <p>{d.workers === '비공개' ? <LockIcon/> : d.workers}</p>
                    <p>{d.parttime === '비공개' ? <LockIcon/> : d.parttime}</p>
                </div>
            </div>
        </div>
    )
}

export default Details
