import React, { useEffect } from 'react'
import skills from '../data/skills.json';

const Skills = () => {
    // console.log(skills);
    return (
        <section id="skills" className="skills section-bg section-wrap" data-aos="fade-down">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="row skills-content">
                    {
                        
                        skills.map((skill)=>(
                            <div className="col-lg-6" key={skill.name}>
                                <div className="progress mb-2">
                                    <span className="skill">{skill.name} <i className="val">{skill.ratings}%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" style={{ 'width': skill.ratings+'%' }}></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Skills
