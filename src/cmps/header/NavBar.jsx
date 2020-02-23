import React from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger.jsx';


export default function NavBar() {
    return (
        <nav className='flex'>
            <div className='links-container'>
                <NavLink activeClassName="active" to='/'>home</NavLink>
                <NavLink activeClassName="active" to='/'>about</NavLink>
            </div>
            <button className="main-btn">contact us</button>
            <Hamburger />
            <img src={require('../../assets/images/nav/nav-circle.svg')} alt=""/>
        </nav>
    )
}
