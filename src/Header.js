import React, { Component } from 'react'
import logo from './images/logo.svg'
import './Header.css';
import Menu from './Menu'

export default class Header extends Component {   
    render() {
        return (
            <div id='header'>
                <div className="header-section"> 
                <img id='logo' src={logo} alt="logo"/>
                <img onClick={this.props.menuToggle} 
                id='iconHam-Close' 
                src={this.props.icon}
                alt=''/>
                </div> 
                <Menu display={this.props.display}/>
            </div>
        )
    }
}
