import React, { useState }  from 'react'
import { Col, Row, Pagination, Input } from 'antd';
import Center from '../Layout/Center';
import Half from '../Layout/Half';
import CardContent from "../Common/CardContent";
import Mark from '../Common/Mark';

const { Search } = Input;

function ForSale(props) {
    const openData = props.list;
    const BuyorSell = props.text;
    

    const pageDefault = {
        min: 0,
        max: 12
    }

    const [Data, setData] = useState(openData);
    const [PageValue, setPageValue] = useState(pageDefault)

    const handleChange = (value) => {
        window.scrollTo(0, 0);
        if(value === 1){
            setPageValue({
               min: 0,
               max: 12
            })
        }else{
            setPageValue({
                // min: PageValue.max,
                // max: value * 12
                min: (value - 1) * 12,
                max: ((value - 1) * 12) + 12
             })
        }
    }
    console.log(PageValue)

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
            <h1>KIMP의 &nbsp;
                {BuyorSell === 'BUY' ? <Mark sell>{BuyorSell}</Mark>  : <Mark buy>{BuyorSell}</Mark> }
                &nbsp; 공개 매물</h1>
            <Search 
            placeholder="Search" 
            onSearch={onSearch} 
            style={{ width: 200 }}  
            enterButton allowClear />
        </Half>
        <Row gutter={[30, 30]}>
            {Data && 
            Data.slice(PageValue.min, PageValue.max).map((content, index) => (
            <Col lg={6} md={8} sm={12} xs={24}>
                { content && <CardContent content={content} index={index}/> }
            </Col>
            ))}
        </Row>
        <Center>
            <Pagination 
            defaultCurrent={1}
            defaultPageSize={12}
            onChange={(e) => handleChange(e)}
            total={Data.length} //total number of card data available
            />
        </Center>
        </>
    )
}

export default ForSale
