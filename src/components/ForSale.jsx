import React, { useState } from 'react'
import { Card, Col, Row, Pagination, Input } from 'antd';
import styled from 'styled-components';
import Center from '../components/Center';
import Half from '../components/Half';

const { Search } = Input;

const CardSize = styled(Card)`
width: 100%;
height: 480px;
overflow: hidden;
`

function ForSale(props) {
    const openData = props.list;
    const pageDefault = {
        min: 0,
        max: 8
    }

    const [Data, setData] = useState(openData);
    const [PageValue, setPageValue] = useState(pageDefault)

    const handleChange = (value) => {
        console.log('e', value)
        if(value === 1){
            setPageValue({
               min: 0,
               max: 8
            })
        }else{
            setPageValue({
                min: PageValue.max,
                max: value * 8
             })
        }
    }

    const onSearch = (value) => {
        let arr = [];
        if(value === ''){
            setData(openData)
        }else{
            openData &&  openData.forEach((content) => {
                if(content.name === value){
                    arr.push(content);
                }
            })
            setData(arr);
        }
    }

    return (
        <>
        <Half>
            <h1>KIMP의 공개 매물</h1>
            <Search 
            placeholder="Search" 
            onSearch={onSearch} 
            style={{ width: 200 }}  
            enterButton allowClear />
            </Half>
        <Row gutter={[16, 16]}>
            {Data && 
            Data.slice(PageValue.min, PageValue.max).map((content, index) => (
            
            <Col lg={6} md={8} xs={24}>
                <CardSize
                key={index}
                hoverable
                cover={<img alt={index} src={content.image} style={{ height: 200 }}/>}
            >
                <h1>{content.name}</h1>
                <p>위치: {content.location}</p>
                <p>매출: {content.sales}</p>
                <p>{content.details}</p>
                </CardSize>
            </Col>
            ))}
        </Row>
        <Center>
                <Pagination 
                defaultCurrent={1}
                defaultPageSize={8}
                onChange={(e) => handleChange(e)}
                total={Data.length} //total number of card data available
                />
        </Center>
        </>
    )
}

export default ForSale
