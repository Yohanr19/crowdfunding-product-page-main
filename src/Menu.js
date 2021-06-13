import React from 'react'
import './Menu.css'

const Menu = (props) => {
    return (
        <div id='menu' className={props.display?'show':'hide'}>
            <p>About</p>
            <p>Discover</p>
            <p>Get Started</p>
        </div>
    )
}

export default Menu
