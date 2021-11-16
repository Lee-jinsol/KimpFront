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
const BREAK_POINT_SMALL = 576;
const BREAK_POINT_LARGE = 992;

function AboutBanner() {
  const Section = styled.section`
    position: relative;
    width: 100%;
    padding: 20px;
    div {
      color: #fff;
      position: absolute;
      h1 {
        color: #fff;
      }
    }
  `;
  const BannerText = styled.div`
    text-align: center;
    top: 20%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 60px;
    line-height: 40px;
    b {
      font-size: 20px;
    }
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      font-size: 50px;
      b {
        font-size: 17px;
      }
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
      font-size: 40px;
      b {
        font-size: 17px;
      }
    }
  `;

  const Box = styled.div`
    top: 90%;
    font-size: 20px;
    box-shadow: 3px 5px 4px grey;
    z-index: 1;
    height: 150px;
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 10px;
    span {
      font-size: 18px;
      color: #2c3e50;
      text-align: center;
      width: 100%;
      top: 50%;
      position: absolute;
      transform: translateY(-50%);
      line-height: 30px;
    }
    line-height: 20px;
    font-weight: normal;

    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      span {
        font-size: 14px;
      }
      top: 80%;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
      span {
        font-size: 14px;
      }
      width: 70%;
      top: 80%;
    }
  `;

  return (
    <>
      <Section style={BulidingImg}>
        <BannerText>
          <p>KIMP</p>
          <b> Korea International M&A Platfom </b>
        </BannerText>
        <Box>
          <span>
            M&A 중개 및 사업승계 컨설팅 서비스를 제공하는 KIMP.
            <br />
            어렵기만한 M&A, KIMP가 해결해 드립니다.
            <br />
            한국무역협회 산하의 KIMP에서 안전한 M&A 바로 시작하세요.
            <br />
          </span>
        </Box>
      </Section>
    </>
  );
}

export default AboutBanner;
