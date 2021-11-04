import {Button } from 'antd';
import styled, { css } from 'styled-components'

const Btn = styled(Button)`
    background: #102A3E;
    color : #FFFFFF;
    width: 100%;
    height: 50px; 
    text-align: center;
    text-transform: uppercase;
    margin: 5px;
    border: 0;
    &:hover {
        background: #6B869B;
        color: #fff;
    }
    ${props => props.white && 
        css`
        // background-image: linear-gradient(to right, #6B869B 0%, #102A3E 100%);
        background: #fff;
        color: #000;
        &:hover{
            background: #e4e4e4;
            color: #627890;
        }
    `}
`;

export default Btn;