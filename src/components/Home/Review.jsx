import React from 'react'
import { Comment,  Card } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
    Navigation
  } from 'swiper';
import styled from 'styled-components';
  
  SwiperCore.use([Navigation]);

function Review(props) {

    const BREAK_POINT_LARGE = 992;
    const BREAK_POINT_MEDIUM = 768;
    const BREAK_POINT_SMALL = 576;

    const Slider = styled(Swiper)`
    height: 270px;
    .swiper-button-prev, .swiper-button-next{
        color: #102A3E;
    }
    .swiper-pagination-bullet-active{
        background: #102A3E;
    }
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
        height: 350px;
    }
    @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
        height: 270px;
    }
    @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
        height: 350px;
    }
    `
    // const stars = (data) => [
    //     <Rate disabled defaultValue={data} />
    // ]

    return (
        <>
        <Slider
            // slidesPerView={2}
            // spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                "clickable": true
              }}
            navigation={true}
            breakpoints={{
            "576": {
                "slidesPerView": 1,
                "spaceBetween": 10
            },
            "768": {
                "slidesPerView": 2,
                "spaceBetween": 20
            },
            "1024": {
                "slidesPerView": 2,
                "spaceBetween": 30
            }
        }}
            className="mySwiper"
        >
         {props.list && props.list.map((content, index) => (    
            <SwiperSlide style={{padding: '20px'}} key={index}>
                <Card hoverable>
                <Comment
                // actions={stars(content.rate)}
                author={<p>{content.name} </p>}
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
