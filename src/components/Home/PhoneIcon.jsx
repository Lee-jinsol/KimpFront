import React from 'react'
import { PhoneFilled } from '@ant-design/icons';
import styled from 'styled-components'

function PhoneIcon() {
    const PhoneStyle = styled(PhoneFilled)`
        transform: rotateY(180deg); 
    `
    return (
        <>
            <PhoneStyle/>
        </>
    )
}

export default PhoneIcon
