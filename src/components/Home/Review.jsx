import React from 'react'
import { Comment, Rate,  Card } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
    Navigation
  } from 'swiper';
import styled from 'styled-components';
  
  SwiperCore.use([Navigation]);

function Review(props) {

    // const [Star, setStar] = useState(0);

    const Slider = styled(Swiper)`
    height: 300px;
    .swiper-button-prev, .swiper-button-next{
        color: #102A3E;
    }
    .swiper-pagination-bullet-active{
        background: #102A3E;
    }
    `
    const stars = (data) => [
        <Rate disabled defaultValue={data} />
    ]

    return (
        <>
        <Slider
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true
              }}
            navigation={true}
            className="mySwiper"
        >
         {props.list && props.list.map((content, index) => (    
            <SwiperSlide style={{padding: '20px'}} key={index}>
                <Card hoverable>
                <Comment
                actions={stars(content.rate)}
                author={<p>{content.name} 님의 작성 </p>}
                content={
                    <p>{content.description}</p>
                }
                />
                </Card>
                </SwiperSlide>
            ))}

            
            </Slider>
        </>
    )
}

export default Review
