import React from 'react'

export default function SkillPreview({ skill }) {
    return (
        <div className="skill-preview flex">
            <img src={require(`../../../assets/images/skills/${skill.imgName}.svg`)} alt="" />
            <div className="skill-content">
                <h4>{skill.header}</h4>
                <p>{skill.txt}</p>
            </div>
        </div>
    )
}
