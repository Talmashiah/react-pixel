import React from 'react';
import NavBar from './NavBar.jsx';
import Logo from './Logo.jsx';
import Hamburger from './Hamburger.jsx';

export default function Header() {
    return (
        <header className="flex align-center justify-between">
            <div className="flex main-nav">
                <Logo />
                <NavBar />
            </div>
            <Hamburger />
        </header>
    )
}
