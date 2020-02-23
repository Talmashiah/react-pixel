import React from 'react'

export default function SocialLink() {
    return (
        <div className="social-link flex column justify-between">
            <div className="icons-container">
                <img src={require('../../assets/images/footer/icon-facebook.svg')} alt="" />
                <img src={require('../../assets/images/footer/icon-pinterest.svg')} alt="" />
                <img src={require('../../assets/images/footer/icon-twitter.svg')} alt="" />
            </div>
            <small>Copyright 2020. All Rights Reserved</small>
        </div>
    )
}
