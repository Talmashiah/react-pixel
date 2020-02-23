import React from 'react';
import About from '../cmps/main-content/About.jsx';
import Skills from '../cmps/main-content/skills/Skills.jsx';
import Stories from '../cmps/main-content/stories/Stories.jsx';
import CallToAction from '../cmps/main-content/CallToAction.jsx';

export default function Home() {
    return (
        <div>
            <About/>
            <Skills/>
            <Stories/>
            <CallToAction/>
        </div>
    )
}
