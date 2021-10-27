import React from 'react'
import Center from '../../components/Layout/Center';
import Properties from '../../components/Buy/Properties';
import styled from 'styled-components'
import SecretLogin from '../../components/List/SecretLogin';

function Secret() {

    const Secret = styled.section`
    width: 100%;
    padding-top: 20px;
    min-height: 72vh;
    background: url(https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80);
    background-size: cover;
    `

    return (
        <Secret>
            <Center>
                <Properties default={'Secret Properties'}/>
            </Center>
            <SecretLogin />
        </Secret>
    )
}

export default Secret
