import React from 'react'
import { SellOpen } from '../../data/SellOpen'

import { Divider } from 'antd'
import ImgArea from '../../components/Detail/ImgArea';
import Block from '../../components/Layout/Block';
import Half from '../../components/Layout/Half';
import TitleArea from '../../components/Detail/TitleArea';
import Registration from '../../components/Detail/Registration'
import Information from '../../components/Detail/Information';
import Details from '../../components/Detail/Details'
import Btn from '../../components/Common/Btn';

function Detail(props) {
    const name = props.match.params.name;
    const info = SellOpen.filter(content => (content.name) === name )
    const data = info[0]

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
                </Block>
                {/* Right */}
                <Block>
                    <Information list={data}/>
                    <Divider/>
                    <Details list={data}/>
                    <Divider/>
                    <Btn>비공개 정보 열람 신청하기</Btn>
                </Block>
            </Half>
        </div>
    )
}

export default Detail
