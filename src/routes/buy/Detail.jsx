import React, { useState }  from 'react'
import { BuyOpen } from '../../data/BuyOpen'

import { Divider, message } from 'antd'
import { LikeOutlined, LikeTwoTone } from '@ant-design/icons';
import styled from 'styled-components'
import ImgArea from '../../components/Detail/ImgArea';
import Block from '../../components/Layout/Block';
import Half from '../../components/Layout/Half';
import TitleArea from '../../components/Detail/TitleArea';
import Registration from '../../components/Detail/Registration'
import Information from '../../components/Detail/Information';
import Details from '../../components/Detail/Details'
import Btn from '../../components/Common/Btn';
import Center from '../../components/Layout/Center';

function Detail(props) {
    const name = props.match.params.name;
    const info = BuyOpen.filter(content => (content.name) === name )
    const data = info[0]

const BREAK_POINT_LARGE = 992;

    const Icon = styled(Center)`
        font-size: 20px;
        border: 1px solid #A5A5A5;
        color: #A5A5A5; 
        width: 50px;
        height: 50px; 
        padding-top: 0;
        margin: 5px;
        &:hover {
            color: #3181BD;
        }
        @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
            width: 100%;
        }
    `
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        if(click === true){
            message.success(`[ ${data.name} ]을 관심 매물로 설정하셨습니다!`);
        }else{
            message.error(`관심 매물 [ ${data.name} ]을 취소하셨습니다.`);
        }
    }

    return (
        <div>
            <Half>
                {/* Left */}
                <Block>
                    <ImgArea list={data}/>
                    <Divider/>
                    <TitleArea list={data}/>
                    <Divider/>
                    <Registration list={data}/>
                    <Divider/>
                    <div style={{textAlign: 'right'}}>
                         조회수 &nbsp; {data.count}
                    </div>
                </Block>
                {/* Right */}
                <Block>
                    <Information list={data}/>
                    <Divider/>
                    <Details list={data}/>
                    <Divider/>
                    <Half>
                      <Icon onClick={handleClick} >
                        { click ?  <LikeOutlined/> : <LikeTwoTone twoToneColor="#3181BD" />}
                      </Icon>
                     <Btn type="primary">비공개 정보 열람 신청하기</Btn>
                    </Half>
                </Block>
            </Half>
        </div>
    )
}

export default Detail
