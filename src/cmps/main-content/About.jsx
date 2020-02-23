import React from 'react'

export default function About() {
    return (
        <div className="about container flex justify-between">
            <div className="about-header">
                <img src={require("../../assets/images/about/about-circle-left.svg")} alt="" />
                <h1><span>Find the</span> best <span>talent</span></h1>
            </div>
            <div className="about-content">
                <img src={require("../../assets/images/about/rectangle.png")} alt="" />
                <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                <img src={require("../../assets/images/about/about-circle-right.svg")} alt="" />
            </div>
        </div>
    )
}
