import React from 'react'

const PortfolioDetail = ({ project }) => {
    return (
        <div id={`project-details-${project.key}`} style={{ 'display': 'none' }}>
            <div className="project-detail-wrap">
                <div className="project-detail-image">
                    <img src={project.image} className="img-fluid" alt="" />
                </div>
                <div className="project-detail-container">
                    <div className="project-title">
                        <h2 >{project.name}</h2>
                    </div>
                    
                    <div className="project-tech mb-4">
                    {
                        project.techstack.split(",").map((tech)=>
                            <span className="badge bg-secondary me-2" key={tech}>{tech}</span>
                        )
                    }
                    </div>
                    {project.link &&
                        <div className="project-link project-detail-section">
                            <h4 className='heading'>Link:</h4>
                            <a href={project.link} className='project-url'>{project.link}</a>
                        </div>
                    }
                    <div className="project-detais project-detail-section">
                        <h4 className='heading'>Description:</h4>
                        {project.description}
                    </div>

                    <div className="project-role project-detail-section">
                        <h4 className='heading'>Role:</h4>
                        {project.role}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetail
