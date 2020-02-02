import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import logo from '../assets/logo.png';

export const Navigation = () => {
    return (

        <header id="header">
            <div class="container main-menu">
                <div class="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <Link to="/"><img src={require('../assets/logo.png')} alt="" title="" /></Link>
                    </div>
                    <nav id="nav-menu-container">
                        <ul class="nav-menu sf-js-enabled sf-arrows" >
                            <li><Link to="/">Home</Link></li>
                            <li class=""><Link to="/services">Services</Link></li>
                            <li class=""><Link to="/about">About</Link></li>
                            <li><Link to="/contactinfo">Contact</Link></li>

                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}