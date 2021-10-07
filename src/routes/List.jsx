import React from 'react'
import styled from 'styled-components'
import ForSale from '../components/List/ForSale';
import { openData } from '../data/openData';
import Center from '../components/Layout/Center';
import Properties from '../components/List/Properties';

function List() {

    const Content = styled.div`
        padding: 50px;
    `
    
    return (
        <div style={{padding: '50px'}}>
            <Center>
                <Properties/>
            </Center>
            <Content>
                <ForSale list={openData}/>
            </Content>
        </div>
    )
}

export default List
