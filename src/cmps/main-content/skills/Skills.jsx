import React, { Component } from 'react';
import SkillList from './SkillList.jsx';

export default class Skills extends Component {
    // sorry about that..

    state = {
        skills: [
            {
                imgName: 'icon-person',
                header: 'Experienced Individuals',
                txt: 'Our network is made up of highly experienced professionals who are passionate about what they do.'
            },
            {
                imgName: 'icon-cog',
                header: 'Easy to Implement',
                txt: 'Our processes have been refined over years of implementation meaning our teams always deliver.'
            },
            {
                imgName: 'icon-chart',
                header: 'Enhanced Productivity',
                txt: 'Our customized platform with in-built analytics helps you manage your distributed teams.'
            },
        ]
    }

    render() {
        const {skills} = this.state;
        if(!skills) return 'Loading...'
        return (
            <div className="skills container flex justify-between">
                <div className="skills-header">
                    <img src={require('../../../assets/images/skills/rectangle.png')} alt="" />
                    <h1><span>Build & manage</span> <span>distributed teams</span> <span>like no one else.</span></h1>
                </div>
                <SkillList skills={skills}/>
                <img className="skills-circle" src={require('../../../assets/images/skills/skills-circle.png')} alt="" />
            </div>
        )
    }
}
