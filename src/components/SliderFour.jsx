import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Card } from 'antd';
import styled from 'styled-components'

import SwiperCore, {
    Pagination
  } from 'swiper';


SwiperCore.use([Pagination]);

function SliderFour(props) {

    const Slider = styled(Swiper)`
    height: 550px;
    padding-top: 30px;
    .swiper-pagination-bullet-active{
        background: #102A3E;
    }
    `
    
    return (
        <>
     <Slider
     slidesPerView={1} spaceBetween={10} pagination={{"clickable": true}} breakpoints={{
            "@0.00": {
                "slidesPerView": 1,
                "spaceBetween": 10
            },
            "@0.75": {
                "slidesPerView": 2,
                "spaceBetween": 20
            },
            "@1.00": {
                "slidesPerView": 3,
                "spaceBetween": 40
            },
            "@1.50": {
                "slidesPerView": 4,
                "spaceBetween": 50
            }
            }} className="mySwiper">
            {props.list && props.list.map((content, index) => (    
                <SwiperSlide>
                    <Card
                    key={index}
                    style={{ width: 300 , height: 450 }}
                    hoverable
                    cover={<img alt={index} src={content.image} style={{ width: 300, height: 200}}/>}
                >
                    <h1>{content.name}</h1>
                    <p>위치: {content.location}</p>
                    <p>매출: {content.sales}</p>
                    <p>{content.details}</p>
                    </Card>
                </SwiperSlide>
            ))}
            </Slider>
      </> 
      
    )
}

export default SliderFour
