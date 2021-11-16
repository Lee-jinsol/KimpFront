import React from 'react';
import styled from 'styled-components';
import Half from '../Layout/Half';
import CardImg1 from '../../image/CardImg1.png';
import CardImg2 from '../../image/CardImg2.png';
import Number from '../Home/Number';

function AboutCard() {
  const BREAK_POINT_MEDIUM = 768;
  const BREAK_POINT_SMALL = 576;
  const BREAK_POINT_LARGE = 992;

  const Block = styled.div`
    display: block;
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      padding: 0;
    }
  `;

  const Card = styled.section`
    margin-top: 100px;
    img {
      width: 600px;
    }
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      padding: 20px;
      margin-top: 50px;
      img {
        width: 100%;
      }
    }
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      padding: 10px;
    }
  `;

  const HalfFix = styled(Half)`
    justify-content: space-evenly;
    width: 100%;
  `;

  const Division = styled.div`
    display: flex;
    color: black;
  `;

  const Line = styled.div`
    border-left: 1px solid #102a3e;
    height: 40px;
    margin: 20px;
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      display: none;
    }
  `;

  const Textarea = styled.div`
    padding-left: 30px;
    font-size: 15px;

    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
      font-size: 14px;
    }
  `;

  const FinalArea = styled.div`
    div {
      margin-right: 120px;
      @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
        maring-right: 0;
        padding-top: 20px;
        width: 100%;
      }
      @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
        maring-right: 0;
        padding-top: 20px;
        width: 100%;
        font-size: 14px;
      }
    }
  `;

  return (
    <Card>
      <HalfFix>
        <Block>
          <Division>
            <Number black>1</Number>
            <Textarea>
              <h3>안전한 정보공유</h3>
              <p>한국무역협회에서 분사한 M&A플랫폼</p>
            </Textarea>
          </Division>
          <Line />
          <Division>
            <Number black>2</Number>
            <Textarea>
              <h3>다양한 매물</h3>
              <p>M&A 생태계 다양한 관계자들을 포용</p>
            </Textarea>
          </Division>
          <Line />
          <Division>
            <Number black>3</Number>
            <Textarea>
              <h3>딱맞는 연결</h3>
              <p>최적의 전문가 및 네트워킹을 통한 선택</p>
            </Textarea>
          </Division>
        </Block>

        <img src={CardImg1} alt="카드1" />
      </HalfFix>

      <HalfFix>
        <img src={CardImg2} alt="카드2" />
        <FinalArea>
          <div>
            <h1>
              Safe Process of M&A,
              <br />
              We will DO BEST
              <br />
              for your BUSINESS.
            </h1>
            <p>
              M&A 중개 및 사업승계 컨설팅 서비스를 제공하는 KIMP.
              <br />
              어렵기만한 M&A, KIMP가 해결해 드립니다.
              <br />
              한국무역협회 산하의 KIMP에서 안전한 M&A 바로 시작하세요. <br />
            </p>
          </div>
        </FinalArea>
      </HalfFix>
    </Card>
  );
}

export default AboutCard;
