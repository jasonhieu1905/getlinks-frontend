import React from 'react';
import logo from './../../img/getlinks-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header">
            <div class="container">
                <div class="header-content">
                    <a href="/"><img src={logo} class="logo-img" /></a>
                </div>
                <div class="header-content">
                    <ul class="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;