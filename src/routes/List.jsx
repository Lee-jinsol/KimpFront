import React, { useState } from 'react'
import { Radio } from 'antd';
import styled from 'styled-components'
import ForSale from '../components/ForSale';
import { openData } from '../data/openData';
import Center from '../components/Center';

function List() {
    
    const [Default, setDefault] = useState('a')
    // const [SeachData, setSeachData] = useState('')

    const change = e => {
        setDefault(e.target.value)
    }

    const Properties = styled.div`
        padding: 50px;
    `

    return (
        <div style={{padding: '50px'}}>
            <Center>
                <Radio.Group defaultValue={Default} onChange={change} buttonStyle="solid">
                    <Radio.Button value="a">Open Properties</Radio.Button>
                    <Radio.Button value="b">Secret Properties</Radio.Button>
                </Radio.Group>
            </Center>
            <Properties>
                <ForSale list={openData}/>

            </Properties>
        </div>
    )
}

export default List
