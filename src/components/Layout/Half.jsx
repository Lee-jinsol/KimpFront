import styled from 'styled-components'

const BREAK_POINT_LARGE = 992;

const Half = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
        display: block;
    }
`

export default Half