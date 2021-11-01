import React from 'react'
import { Radio } from 'antd'
import { NavLink } from "react-router-dom";

function Properties(props) {
    const Default = props.default;
    return (
        <>
        <Radio.Group defaultValue={Default} buttonStyle="solid">
            <NavLink to="/list/open">
                <Radio.Button value="Open Properties">
                        &nbsp;Open Properties&nbsp;
                </Radio.Button>
            </NavLink>
            <NavLink to="/list/secret">
            <Radio.Button value="Secret Properties">
                    Secret Properties
            </Radio.Button>
            </NavLink>
        </Radio.Group>
        </>
    )
}

export default Properties
