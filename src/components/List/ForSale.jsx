import React, { useState } from 'react'
import { Col, Row, Pagination, Input } from 'antd';
import Center from '../Layout/Center';
import Half from '../Layout/Half';
import CardContent from "../Common/CardContent";

const { Search } = Input;

function ForSale(props) {
    const openData = props.list;
    const pageDefault = {
        min: 0,
        max: 16
    }

    const [Data, setData] = useState(openData);
    const [PageValue, setPageValue] = useState(pageDefault)

    const handleChange = (value) => {
        if(value === 1){
            setPageValue({
               min: 0,
               max: 16
            })
        }else{
            setPageValue({
                min: PageValue.max,
                max: value * 16
             })
        }
    }

    const onSearch = (value) => {
        let arr = [];
        if(value === ''){
            setData(openData)
        }else{
            openData &&  openData.forEach((content) => {
                if((content.name).includes(value)){
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
                { content && <CardContent content={content} index={index}/> }
            </Col>
            ))}
        </Row>
        <Center>
            <Pagination 
            defaultCurrent={1}
            defaultPageSize={16}
            onChange={(e) => handleChange(e)}
            total={Data.length} //total number of card data available
            />
        </Center>
        </>
    )
}

export default ForSale
