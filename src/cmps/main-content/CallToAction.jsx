import React from 'react'

export default function CallToAction() {
    return (
        <div className="call-to-action flex justify-between align-center">
            <img src={require('../../assets/images/call-to-action/circle.svg')} alt=""/>
            <h1>Ready to get started?</h1>
            <button className="main-btn">contact us</button>
        </div>
    )
}
