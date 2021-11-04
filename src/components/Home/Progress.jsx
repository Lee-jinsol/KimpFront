import React from 'react'
import styled from 'styled-components'
import Half from '../Layout/Half';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks'
import progressSvg from '../../assets/progress.svg';
import Circle from './Circle';

function Progress() {
    const BREAK_POINT_EXTRA_LARGE = 1200;
    const BREAK_POINT_LARGE = 992;
    // const BREAK_POINT_SMALL = 576;

    const Reason =  styled.section`
        padding: 30px;
        background: #102A3E;
        position: relative;
        height: 700px;
        h1{
            color: #fff;
            padding: 20px;
        }
        img{
            // width: 100%;
            height: 500px;
        }
        &::before{
            content: "";
            // background: url(https://images.pexels.com/photos/934456/pexels-photo-934456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
            background: url(${progressSvg});
            background-size: cover;
            opacity: 0.5;
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
        }
        @media only screen and (max-width: ${BREAK_POINT_EXTRA_LARGE}px) {
           img{
            height: 300px;
           } 
           h1{
               padding: 0;
           }
        }
        @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
            padding: 20px;
            height: 100%;
            img{
                display: none;
            }
        }
    `

    const animatedImage = useScrollClipPath('right', 1, 0.5);
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
    };

    return (
        <>
            <Reason>
                <h1 {...animatedItem[0]}>
                    KIMP에서 M&A를 진행해야 하는 이유
                </h1>
                <Half>
                    <Circle/>
                    <img src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="progress" {...animatedImage}/>
                </Half>
            </Reason>
        </>
    )
}

export default Progress
