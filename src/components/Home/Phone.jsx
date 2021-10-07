import React from 'react'
import styled from 'styled-components'
import PhoneIcon from './PhoneIcon'

function Phone() {
    const Section = styled.section`
        display : flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 60px;
        background: #102A3E;
        color: #fff;
        font-weight: bold;
        font-size: 25px;
        p{
            margin-bottom: 0;
        }
    `
    return (
        <>
        <Section>
            <p>M&A Free family business succession consulting</p>
            <p><PhoneIcon/> &nbsp; 02-6000-5351</p>
        </Section>
        </>
    )
}

export default Phone
