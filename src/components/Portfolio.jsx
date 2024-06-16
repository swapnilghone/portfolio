import React, { useEffect, useRef, useState } from 'react'
import Isotope from 'isotope-layout';
import projects from '../data/project.json';

const Portfolio = () => {

    const gridRef = useRef(null);
    const isotopeInstance = useRef(null);

    const [activeFilter,setActiveFilter] = useState('*');

    const handleFilter = (filter) => {
        isotopeInstance.current.arrange({ filter: filter });
        setActiveFilter(filter);
    }

    useEffect(() => {
        isotopeInstance.current = new Isotope(gridRef.current, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
        });

        return () => {
            if (isotopeInstance.current) {
                isotopeInstance.current.destroy();
            }
        };
    }, []);

    return (
        <section id="portfolio" className="portfolio section-bg section-wrap" data-aos="fade-up">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li onClick={() => handleFilter('*') } className={activeFilter == '*'? 'filter-active' :''} >All</li>
                            <li onClick={() => handleFilter('.filter-wp') } className={activeFilter == '.filter-wp'? 'filter-active' :''}>Wordpress</li>
                            <li onClick={() => handleFilter('.filter-laravel') } className={activeFilter == '.filter-laravel'? 'filter-active' :''}>Laravel</li>
                            <li onClick={() => handleFilter('.filter-ci') } className={activeFilter == '.filter-ci'? 'filter-active' :''}>Codeigniter</li>
                            <li onClick={() => handleFilter('.filter-react') } className={activeFilter == '.filter-react'? 'filter-active' :''} >ReactJs</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100" ref={gridRef} >

                    {
                        projects.map((project) => {
                            return (
                                <div className={`col-lg-4 col-md-6 portfolio-item filter-${project.tech}`} key={project.key}>
                                    <div className="portfolio-wrap">
                                        <div className="portfolio-image">
                                            <img src={project.image} className="img-fluid" alt="" />
                                        </div>
                                        <div className="portfolio-content">
                                            <h4 className="project-title">{project.name}</h4>
                                            <div className="project-description">
                                                <p>{project.description}</p>
                                                {project.role && (<p><b>Role:</b>{project.role}</p>)}
                                            </div>
                                            <div className="project-link">
                                                <a href={project.link}>{project.link}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio
