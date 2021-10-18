import React, { useState } from 'react'
import { Radio } from 'antd'

function Properties() {

    const [Default, setDefault] = useState('a')

    const change = e => {
        setDefault(e.target.value)
    }

    return (
        <>
        <Radio.Group defaultValue={Default} onChange={change} buttonStyle="solid">
            <Radio.Button value="a">&nbsp;Open Properties&nbsp;</Radio.Button>
            <Radio.Button value="b">Secret Properties</Radio.Button>
        </Radio.Group>
        </>
    )
}

export default Properties
