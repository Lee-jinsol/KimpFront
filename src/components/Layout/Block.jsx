import styled from "styled-components"

  const BREAK_POINT_LARGE = 992;
  const Block = styled.div`
  text-align: ${(props) => (props.center) ? "center" : "left"};
  width: 100%;
  display: block;
  padding: 10px 50px;
  h3{
      font-size: 20px;
      span{
        background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #B0C4D3 50%);
      }
  }
  @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      padding: 0;
  }
`
export default Block;