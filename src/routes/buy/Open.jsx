import React from 'react'
import Center from '../../components/Layout/Center';
import Properties from '../../components/Buy/Properties';
import ForSale from '../../components/List/ForSale';
import styled from 'styled-components'
import { BuyOpen } from '../../data/BuyOpen';

function Open() {
    const BREAK_POINT_SMALL = 576;

    const ListSection = styled.section`
        padding: 50px;
        @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
            padding: 20px;
        }
    `

    return (
        <div style={{paddingTop: '20px'}}>
            <Center>
                <Properties default={'Open Properties'}/>
            </Center>
            <ListSection>
                <ForSale list={BuyOpen} text={'BUY'}/>
            </ListSection>
        </div>
    )
}

export default Open
