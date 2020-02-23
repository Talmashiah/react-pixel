import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from '../header/Logo.jsx';
import Contact from './Contact.jsx';

export default function Info() {
    return (
        <div className="info flex">
            <div>
                <Logo />
                <div className='links-container'>
                    <NavLink activeClassName="active" to='/'>home</NavLink>
                    <NavLink activeClassName="active" to='/'>about</NavLink>
                </div>
            </div>
            <Contact />
        </div>
    )
}
