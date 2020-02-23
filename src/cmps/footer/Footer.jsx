import React from 'react';
import SocialLink from './SocialLink.jsx';
import Info from './Info.jsx';

export default function Footer() {
    return (
        <footer className="flex justify-between">
            <Info/>
            <SocialLink />
        </footer>
    )
}
