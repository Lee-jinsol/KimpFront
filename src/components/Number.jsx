import styled, { css } from 'styled-components'

const Number = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #102A3E;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    ${props => props.white && 
        css`
        background: #fff;
        color: #102A3E;
    `}
`

export default Number