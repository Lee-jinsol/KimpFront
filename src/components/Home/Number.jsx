import styled, {css} from 'styled-components';

const BREAK_POINT_SMALL = 576;

const Number = styled.div`
  border-radius: 50%;
  width: 47px;
  height: 47px;
  background: #102a3e;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  ${(props) =>
    props.white &&
    css`
      background: #fff;
      color: #102a3e;
    `}
  ${(props) =>
    props.black &&
    css`
      background: #102a3e;
      color: #fff;
    `}
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
    width: 30px;
    height: 30px;
  }
`;

export default Number;
