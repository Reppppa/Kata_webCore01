import React, { useState } from 'react';
import './Header.scss'
import { Icon } from "../../icon/icon.jsx";

const Header = ({setNavBarIsOpen}) => {

    const handleClick = () => {
        setNavBarIsOpen(prevState => !prevState)
    }

    return (

        <div className='header'>
            <div className='header__inner'>
                <ul className='header__list'>
                    <li className='header__item' onClick={handleClick}><Icon className='ic menu' name='burger' width='40' height='40' /></li>
                    <li className='header__logo'><Icon className='header__logo' name='logo' /></li>
                </ul>
                <ul className='header__list'>
                    <li className='header__item'><Icon className='ic' name='call' width='40' height='40' /></li>
                    <li className='header__item'><Icon className='ic' name='chat' width='40' height='40' /></li>
                    <li className='header__item'><Icon className='ic' name='profile' width='40' height='40' /></li>
                </ul>
                <ul className='header__list'>
                    <li className='header__item'><Icon className='ic' name='repair' width='40' height='40' /></li>
                    <li className='header__item'><Icon className='ic' name='checkstatus' width='40' height='40' /></li>
                </ul>
            </div>
        </div>

      )
}

export default Header;