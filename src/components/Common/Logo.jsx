import React from 'react'
import { NavLink } from "react-router-dom";
import LogoImg from '../../image/KIMP.png';

function Logo() {
    return (
        <>
        <NavLink to="/">
            <img src={LogoImg} width="150" alt="로고" style={{padding: '10px'}} />
        </NavLink>
        </>
    )
}

export default Logo
