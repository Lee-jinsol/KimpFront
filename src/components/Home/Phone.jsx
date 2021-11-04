import React from 'react'
import styled from 'styled-components'
import { PhoneFilled } from '@ant-design/icons';
import { useScrollFadeIn } from '../../hooks'
import phoneSvg from '../../assets/phone.svg';

function Phone() {
    
    const BREAK_POINT_LARGE = 992;
    const BREAK_POINT_MEDIUM = 768;
    const BREAK_POINT_SMALL = 576;

    const Section = styled.section`
        display : flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 60px;
        
        background: url(${phoneSvg});
        background-size: cover;

        color: #fff;
        font-weight: bold;
        font-size: 20px;
        p{
            margin-bottom: 0;
            b{
                font-size: 25px;
            }
        }
        @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
            display: block;
            text-align: center;
            font-size: 15px;
            line-height: 30px;
            p{
                b{
                font-size: 25px;
                }
            }
        }
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            font-size: 15px;
            line-height: 35px;
        }
        @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
            p{
                b{
                font-size: 23px;
                }
            }
        }
    `
    const PhoneIcon = styled(PhoneFilled)`
        transform: rotateY(180deg); 
        font-size: 25px;
        @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
            display: block;
            width: 100%:
            text-align: center;
        }
    `
    const animatedItem = {
        0: useScrollFadeIn('down', 1, 0.2),
        1: useScrollFadeIn('down', 1, 0.4),
    }

    return (
        <>
        <Section>
        <p {...animatedItem[0]}>M&A Free family business succession consulting</p>
            <p {...animatedItem[1]}><PhoneIcon/> &nbsp; <b>02-6000-5351</b></p>
        </Section>
        </>
    )
}

export default Phone
