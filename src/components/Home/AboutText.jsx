import React from 'react';
import styled from 'styled-components';

function AboutText() {
  const Section = styled.section`
    position: relative;
    padding: 20px;
    p {
      color: black;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 30px;
      text-align: center;
    }
  `;
  return (
    <Section>
      <p>
        KIMP의 모든 사용자는 NDA계약 사전체결, 매수자 정보확인절차를 거칩니다.
        <br></br>
        높은 신뢰성을 유지하기위한 KIMP의 노력으로<br></br>
        안전한 M&A 거래를 유도합니다.<br></br>
        <br></br>.<br></br>
        <br></br>얄리얄리얄라셩 얄랴리 얄라얄리얄리얄라<br></br>
        얄리얄리얄라셩 얄랴리 얄라얄리얄리얄라셩 얄랴리 얄라<br></br>
        얄리얄리얄라셩 얄랴리 얄라얄리얄리얄라셩 얄랴리 <br></br>
        얄리얄리얄라셩 얄랴리 얄라<br></br>
        <br></br>.<br></br>
        <br></br>얄리얄리얄라셩 얄랴리 얄라얄리얄리얄라셩 얄랴리 얄<br></br>
        얄리얄리얄라셩 얄랴리 얄라<br></br>
      </p>
    </Section>
  );
}

export default AboutText;
