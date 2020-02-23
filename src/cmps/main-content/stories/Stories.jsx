import React, { Component } from 'react'
import StoryList from './StoryList.jsx';

export default class Stories extends Component {
    state = {
        stories: [
            {
                name: 'Kady Baker',
                role: 'Product Manager at Bookmark',
                imgName: 'avatar-kady',
                txt: '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”'
            },
            {
                name: 'Aiysha Reese',
                role: 'Founder of Manage',
                imgName: 'avatar-aiysha',
                txt: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”'
            },
            {
                name: 'Arthur Clarke',
                role: 'Co-founder of MyPhysio',
                imgName: 'avatar-arthur',
                txt: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”'
            },
        ]
    }
    render() {
        const { stories } = this.state
        console.log(stories);
        return (
            <div className="stories container">
                <img className="stories-circle" src={require('../../../assets/images/stories/left-circle.svg')} alt="" />
                <img className="stories-circle" src={require('../../../assets/images/stories/right-circle.svg')} alt="" />
                <h1><span>Delivering real results for top companies.</span> Some of our <span>success stories.</span></h1>
                <StoryList stories={stories} />
            </div>
        )
    }
}

