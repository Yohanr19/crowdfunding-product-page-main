import React from 'react'
import './Menu.css'

const Menu = (props) => {
    return (
        <div id='menu' className={props.display?'show':'hide'}>
            <a href='#about'>About</a>
            <a href='#body-top'>Discover</a>
            <a onClick={props.modalOn} href='#modal'>Get Started</a>
        </div>
    )
}

export default Menu
