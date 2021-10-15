import React from 'react'
import ForSale from '../components/List/ForSale';
import { openData } from '../data/openData';
import Center from '../components/Layout/Center';
import Properties from '../components/List/Properties';

function List() {

    return (
        <div style={{padding: '50px'}}>
            <Center>
                <Properties/>
            </Center>
            <section style={{padding: '50px'}}>
                <ForSale list={openData}/>
            </section>
        </div>
    )
}

export default List
