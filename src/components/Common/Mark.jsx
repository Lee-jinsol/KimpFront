import styled, { css } from 'styled-components'

const Mark = styled.span`

${props => props.sell && 
    css`
    // background-image: linear-gradient(to right, #6B869B 0%, #102A3E 100%);
    background: #2A7B63;
    color: #fff;
`}
${props => props.buy && 
    css`
    // background-image: linear-gradient(to right, #B29090 0%, #7B2A2A 100%);
    background: #7B2A2A;
    color: #fff;
    // padding: 5px 10px;
`}
${props => props.blue && 
    css`
    background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #B0C4D3 50%);
`}
`

export default Mark;