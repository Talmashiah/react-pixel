import React from 'react';
import StoryPreview from './StoryPreview.jsx';

export default function StoryList({ stories }) {
    return (
        <div className="story-list flex justify-between">
            {stories.map((story, idx) => <StoryPreview key={idx} story={story} />)}
        </div>
    )
}