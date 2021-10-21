import styled from 'styled-components'

const BREAK_POINT_SMALL = 576;

const ModalStyle = styled.div`
    font-family: Noto Sans KR, sans-serif;
    width: 300px;
    height: 400px;
    overflow-y: scroll;
    border-radius: 10px;
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
        width: 200px;
    }
`

export default ModalStyle;