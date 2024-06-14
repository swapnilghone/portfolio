import React from 'react'
import renovaLogo from '../assets/renova_logo.jpeg'
import simplefoxLogo from '../assets/simplefox_logo.jpeg'
import neosoftLogo from '../assets/neosoft_logo.jpeg'
const Experience = () => {
    return (
        <section id="experience" className="experience section-wrap" data-aos="fade-right">
            <div className="container">
                <div className="section-title">
                    <h2>Experience</h2>
                </div>
                <div className="row experience-content">
                    <div className="col-md-12">
                        <div className="experience-item-wrapper">
                            <div className="company-wrap">
                                <div className="company-logo">
                                    <img src={renovaLogo} />
                                </div>
                                <div className="company-details">
                                    <div className="company-info">
                                        <h4 className='title'>Renova Worldwide</h4>
                                        <h3>Full-time · 3 years 5 months</h3>
                                        <p>Emmett, Idaho, United States · Remote</p>
                                    </div>
                                    <div className="company-experience">
                                        <div className="experience-item">
                                            <h4>Technical Lead</h4>
                                            <h3>Mar 2022 - June 2024 (2 years 4 months)</h3>
                                            <ul>
                                                <li>Led the development and maintenance of the company's website</li>
                                                <li>Integrate with Product manager for requirment gathering and implimentation of new features</li>
                                                <li>Managed all IT operations, overseeing aspects such as hosting, security, and integration with various 3rd-party services.</li>
                                            </ul>
                                        </div>
                                        <div className="experience-item">
                                            <h4>Senior PHP Developer</h4>
                                            <h3>Feb 2021 - Feb 2022 (1 year 1 month)</h3>
                                            <ul>
                                                <li>Project setup in Wordpress</li>
                                                <li>Deveoped various custom plugins for site support and tools</li>
                                                <li>Worked on the MLM Solution Development</li>
                                                <li>Worked on various portals sites Wordpress, ReactJs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="experience-item-wrapper">
                            <div className="company-wrap">
                                <div className="company-logo">
                                    <img src={simplefoxLogo} />
                                </div>
                                <div className="company-details">
                                    <div className="company-info">
                                        <h4 className='title'>simplefox GmbH</h4>
                                        <h3>Full-time · 1 year 1 months</h3>
                                        <p>Kiel, Schleswig-Holstein, Germany · On-site</p>
                                    </div>
                                    <div className="company-experience">
                                        <div className="experience-item single-item">
                                            <h4>Senior PHP Developer</h4>
                                            <h3>Jan 2020 - Jan 2021 (1 year 1 month)</h3>
                                            <ul>
                                                <li>Worked on multiple projects in different frameworks like WordPress, Codeigniter, Laravel and ReactJs.</li>
                                                <li>Contributed to the customization and enhancement of Professional WordPress themes - WoWi Theme</li>
                                                <li>Worked on multiple versions of the Anfrageformular Form Builder plugin</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="experience-item-wrapper">
                            <div className="company-wrap">
                                <div className="company-logo">
                                    <img src={neosoftLogo} />
                                </div>
                                <div className="company-details">
                                    <div className="company-info">
                                        <h4 className='title'>NeoSOFT</h4>
                                        <h3>Full-time · 5 years 10 months</h3>
                                        <p>Mumbai, Maharashtra, India · On-site</p>
                                    </div>
                                    <div className="company-experience">
                                        <div className="experience-item">
                                            <h4>Team Lead</h4>
                                            <h3>July 2018 - Nov 2019 (1 year 5 months)</h3>
                                            <ul>
                                                <li>Lead the Team of Developers</li>
                                                <li>Requirment gathering</li>
                                                <li>Project estimations</li>
                                                <li>Recruitment</li>
                                                <li>Project Management</li>
                                            </ul>
                                        </div>
                                        <div className="experience-item">
                                            <h4>Senior PHP Developer</h4>
                                            <h3>Mar 2016 - June 2018 (2 years 4 months)</h3>
                                            <ul>
                                                <li>Worked in various PHP frameworks/CMS such as WordPress, Drupal, CodeIgniter, Laravel</li>
                                                <li>Worked on developing supporting plugins for Genesis Framework</li>
                                            </ul>
                                        </div>
                                        <div className="experience-item">
                                            <h4>PHP Developer</h4>
                                            <h3>Feb 2014 - Feb 2016 (2 years 1 month)</h3>
                                            <ul>
                                                <li>Worked in various PHP frameworks/CMS such as WordPress, Drupal, CodeIgniter, Laravel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
