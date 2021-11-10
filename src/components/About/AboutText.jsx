import React from 'react';
import styled from 'styled-components';

function AboutText() {
  const Section = styled.section`
    position: relative;
    padding-top: 50px;
    p {
      font-size: 14px;
      color: #1c2833;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
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
        <br></br>KIMP는 매수, 매도 대리인의 역할 범위에 따라 분배되는<br></br>
        정보 공유 인센티브 제도로 더 활발한 거래를 유도하며<br></br>더 활기찬
        M&A 시장을 만들어가고 있습니다. <br></br>
        <br></br>.<br></br>
        <br></br>M&A 기업, 중개자, Finder, 전문가, 투자자<br></br>
        모두를 연결하는 KIMP에서 당신이 찾고있는 기업을 찾아보세요.<br></br>
      </p>
    </Section>
  );
}

export default AboutText;
