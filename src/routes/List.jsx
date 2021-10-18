import React from 'react'
import ForSale from '../components/List/ForSale';
import { openData } from '../data/openData';
import Center from '../components/Layout/Center';
import Properties from '../components/List/Properties';
import styled from 'styled-components'

function List() {

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
                <Properties/>
            </Center>
            <ListSection>
                <ForSale list={openData}/>
            </ListSection>
        </div>
    )
}

export default List
