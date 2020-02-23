import React from 'react';
import SkillPreview from './SkillPreview.jsx';

export default function SkillList({ skills }) {
    return (
        <div>
            {skills.map((skill, idx) => <SkillPreview key={idx} skill={skill} />)}
        </div>
    )
}
