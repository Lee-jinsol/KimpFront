import React from 'react';
import styled from 'styled-components';
import Aboutbanner from '../../image/AboutBanner.png';

const BulidingImg = {
  backgroundImage: `url(${Aboutbanner})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '400px',
};

const BREAK_POINT_MEDIUM = 768;

function AboutBanner() {
  const Section = styled.section`
    position: relative;
    padding: 20px;
    div {
      color: #fff;
      position: absolute;
      font-weight: bold;
      h1 {
        color: #fff;
      }
    }
  `;
  const D1 = styled.div`
    left: 630px;
    top: 100px;
    font-size: 60px;
    line-height: 40px;
  `;

  const D2 = styled.div`
    left: 540px;
    top: 160px;
    font-size: 20px;
    line-height: 30px;
    font-weight: normal;
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      top: 200px;
      left: 0;
      text-align: center;
      width: 100%;
      font-size: 17px;
    }
  `;

  const Box = styled.div`
    left: 540px;
    top: 460px;
    font-size: 20px;
    p {
      color: black;
    }
    line-height: 20px;
    font-weight: normal;
  `;

  return (
    <>
      <Section style={BulidingImg}>
        <D1>KIMP</D1>
        <D2>
          <b> Korea International M&A Platfom </b>
        </D2>
        <Box>
          <p>
            M&A 중개 및 사업승계 컨설팅 서비스를 제공하는 KIMP.
            <br />
            어렵기만한 M&A, KIMP가 해결해 드립니다.
            <br />
            한국무역협회 산하의 KIMP에서 안전한 M&A 바로 시작하세요.
            <br />
          </p>
        </Box>
      </Section>
    </>
  );
}

export default AboutBanner;
