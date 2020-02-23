import React from 'react'

export default function StoryPreview({ story }) {
    return (
        <div className="story-preview">
            <img className="quotation-img" src={require(`../../../assets/images/stories/quotation.png`)} alt="" />
            <p>{story.txt}</p>
            <h3>{story.name}</h3>
            <h5>{story.role}</h5>
            <img className="story-img" src={require(`../../../assets/images/stories/${story.imgName}.jpg`)} alt="" />
        </div>
    )
}