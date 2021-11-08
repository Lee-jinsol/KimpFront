import React from 'react';
import styled from 'styled-components';
// import BoyImg from '../../image/BoyImg.png';
// import GirlImg from '../../image/GirlImg.png';
import CityImg from '../../image/CityImg.png';

function CustBanner() {
  const BREAK_POINT_LARGE = 992;

  const CustHalf = styled.div`
    padding: 0;
    background: #102a3e;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      display: block;
    }
  `

  const Textdiv = styled.div`
    // position: relative;
    // height: 338px;
    width: 30%;
    color: white;
    // background: #102a3e;
    // font-weight: bold;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    // float: left;
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      width: 100%;
      padding: 20px;
    }
  `;
  const Imgdiv = styled.div`
    content: "";
    // float: left;
    width: 70%;
    height: 338px;

    background: url(${CityImg});
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      width: 100%;
    }
  `;

  return (
    <CustHalf>
      <Imgdiv/>
      <Textdiv>
        <p>
          KIMP가 갖고있는 다양한 매물들 중에
          <br></br>
          산업 분야, 매출, 회사 규모 등<br></br>
          내가 원하는 조건들만 골라서
          <br></br>한 눈에 볼 수 있도록 도와드립니다.
        </p>
      </Textdiv>
    </CustHalf>
  );
}
export default CustBanner;
