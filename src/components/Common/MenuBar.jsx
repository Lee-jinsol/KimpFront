import styled from 'styled-components'
import React, { useState }  from 'react'
import Logo from './Logo';
import { NavLink } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

function MenuBar() {

    const BREAK_POINT_MEDIUM = 768;

    const Menu = styled.header`
        position:sticky;
        top:0;
        z-index: 90;
        box-shadow: 0 0 4px #373737;
        width: 100%;

        background: #fff;
        display : flex;
        justify-content: space-between;
        align-items: center;
        nav{
            ul{
                display: inline-block;
                float: right;
                padding: 0;
                margin: 0;
                list-style: none;
                background: #fff;
                z-index: 99;
                li{
                    float: left;
                    padding: 10px 20px;
                    a{
                        padding: 5px 20px;
                        text-align: center;
                        position: relative;
                        z-index: 1;
                        &::after {
                            position: absolute;
                            content: "";
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: #102A3E;
                            transform: scaleY(0);
                            transform-origin: right;
                            transition: transform 0.5s;
                            z-index: -1;
                          }
                        &:hover{
                            color: #fff;
                        }
                        &:hover::after {
                            transform: scaleY(1);
                            transform-origin: left;
                          }
                    }
                    .active{
                        background: #102A3E;
                        color: #fff;
                    }
                }
            }
        }

        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            height: 105px;
            display : block;
            line-height: 30px;
            background: #fff;
            ul{
                flex-direction: column;
                align-items: flex-start;
                visibility: hidden;
                opacity: 0;
                li{
                    width: 100%;
                    text-align: center;
                    background: #e7e7e77e;
                }
            }
            .mobile ul{
                visibility: visible;
                opacity: 0.9;
                width: 100%;  
            }
        
        }
    `
        const Icon = styled.div`
        display: none;
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            position: absolute;
            display: block;
            text-align: right;
            font-size: 20px;
            top: 30px;
            right: 20px;
        }
    `

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <Menu>
                <Logo/>
                <nav className={click ? "mobile" : "nav-menu"}>
                    <ul>
                        <li><NavLink to="/list">M & A List</NavLink></li>
                        <li><NavLink to="/aboutUs">About Us</NavLink></li>
                        <li><NavLink to="/logIn">Log In</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                    <Icon onClick={handleClick}>
                        { click ?  <CloseOutlined /> : <MenuOutlined />}
                    </Icon>
                </nav>
            </Menu>
        </>
    )
}

export default MenuBar
