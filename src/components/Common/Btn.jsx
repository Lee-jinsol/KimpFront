import {Button } from 'antd';
import styled from 'styled-components'

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
`;

export default Btn;