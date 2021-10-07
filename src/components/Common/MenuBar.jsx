import styled from 'styled-components'
import React from 'react'
import Logo from './Logo';
import { NavLink } from "react-router-dom";

function MenuBar() {

    const Menu = styled.header`
        position:sticky;
        top:0;
        z-index: 90;
        box-shadow: 0 0 4px #373737;

        background: #fff;
        display : flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 20px;
        font-weight: Bold 700;
        cursor: pointer;
        nav{
            ul{
                padding: 0;
                margin: 0;
                list-style: none;
                background: #fff;
                z-index: 99;
                li{
                    margin: 5px 25px;
                    display: inline-block;
                    position: relative;
                    &:hover{
                        border-bottom: 2px solid #102A3E;
                        ul{
                            opacity: 1;
                        }
                    }
                    a{
                        text-decoration:none;
                        color: #000;
                    }
                }
                .active{
                    background: #102A3E;
                    color: #fff;
                    padding: 5px 15px;
                }
            }
        }

        @media only screen and (max-width: 576px) {
            display : block;
            padding: 0px;
            li{
                width: 100%;
            }
        }
    `

    const SubMenu = styled.ul`
        width: 150px;
        opacity: 0;
        position: absolute;
        padding: 0px;
        li{
            padding-top: 15px;
            left: 0;
        }

        @media only screen and (max-width: 576px) {
            li{
                text-align: right;
            }
        }
    `

    return (
        <>
            <Menu>
                <Logo/>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/list">M & A List</NavLink>
                        </li>
                        <li> 
                            Success story
                            <SubMenu> 
                                <li>Drop Menu 1</li>
                                <li>Drop Menu 2</li>
                                <li>Drop Menu 3</li>
                                <li>Drop Menu 4</li>
                            </SubMenu>
                        </li>
                        <li>Partners</li>
                        <li activeClassName="active">
                            <NavLink to="/aboutUs">About Us</NavLink>
                        </li>
                        <li><NavLink to="/logIn">Log In</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                </nav>
            </Menu>
        </>
    )
}

export default MenuBar
